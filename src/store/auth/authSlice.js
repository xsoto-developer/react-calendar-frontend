import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authentidated','not-authenticated' 
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state, /* action */) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';  console.log('XXXXXXXXXXXXXXXXxx'); console.log(localStorage.getItem('token'))
            state.user = payload;
            state.errorMessage = undefined
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;