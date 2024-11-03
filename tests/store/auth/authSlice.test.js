import { authSlice, clearErrorMessage, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../fixtures/authStates"
import { testUserCredentials } from "../../fixtures/testUser"

describe('Pruebas en authSlice', () => {
    test('Debe de regresar el estado  incial', () => {
        expect(authSlice.getInitialState()).toEqual(initialState)
    })


    test('Debe de realizar un login', () => {
        const state = authSlice.reducer(initialState, onLogin(testUserCredentials))
        console.log(state)

        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        })
    })

    test('Debe de realizar el logout', () => {
        const state = authSlice.reducer(authenticatedState, onLogout())
        console.log(state)

        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })

    test('Debe de realizar el logout', () => {
        const errorMessage = 'Credenciales no validas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        console.log(state)

        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage
        })
    })

    test('Borrar el mensaje de error', () => {
        const errorMessage = 'Credenciales no validas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        const newState = authSlice.reducer(state, clearErrorMessage())
        // console.log(state)

        expect(newState.errorMessage).toBe(undefined)
    })

})