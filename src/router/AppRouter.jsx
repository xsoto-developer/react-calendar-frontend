import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { CalendarPage } from "../calendar"
import { getEnvVariable } from "../helpers"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    // const authStatus = 'not-authenticated'
    // const authStatus = 'authenticated'
    // const authStatus = 'not-authenticated'

    console.log(getEnvVariable());

    useEffect(() => {
        checkAuthToken()
    }, [])



    if (status === 'checking') {
        return (
            <h3>Cargando.....</h3>
        );

    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<CalendarPage />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    )
            }
            {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}

        </Routes>
    )
}
