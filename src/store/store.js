import { configureStore } from "@reduxjs/toolkit"
import { calendarSlice } from "./calendar/CalendarSlice"
import { uiSlice } from "./ui/uiSlice"
import { authSlice } from "./auth/authSlice"

export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware({
        serializableCheck: false
    })

})