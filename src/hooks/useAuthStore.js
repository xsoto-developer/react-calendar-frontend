import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';
import CalendarApi from '../api/CalendarApi';
import { onLoadCalendar } from '../store/calendar/CalendarSlice';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        console.log({ email, password });
        console.log({ user })
        dispatch(onChecking());
        try {
            const data = await calendarApi.post('/auth', { email, password })
            console.log({ data });

            // console.log('XXXXXXXXXXXXXXXXxx'); 
            // console.log(data.data.token)

            localStorage.setItem('token', data.data.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            console.log('XXXXXXXXXXXXXXXXxx'); 
            console.log(localStorage.getItem('token'))
           

            dispatch(onLogin({ name: data.data.name, uid: data.data.uid }))
            localStorage.setItem('useruid', data.data.uid )
            localStorage.setItem('username', data.data.name )

        } catch (error) {
            console.log({ error })
            dispatch(onLogout('Credenciales Incorrectas'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }
    //const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormField);
    const startRegister = async ({ email, password, name }) => {
        console.log({ name, email, password });
        dispatch(onChecking());
        try {
            //localhost:4000/api/auth/new
            const { data } = await calendarApi.post('/auth/new', { email, password, name })
            ///console.log({ data });
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid }))
        } catch (error) {
            console.log({ error })
            dispatch(onLogout(error.response.data?.msg || '---------'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }


    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());
        try {

            const { data } = await CalendarApi.get('auth/renew')
            console.log({ data })
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid }))

        } catch (error) {
            console.error({ error })
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        console.log({ user })
        localStorage.clear();
        dispatch(onLoadCalendar());
        dispatch(onLogout())
    }

    return {
        // *propiedades
        errorMessage,
        status,
        user,
        //* metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister
    }
}