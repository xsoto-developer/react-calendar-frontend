export const initialState = {
    status: 'checking', // 'authentidated','not-authenticated' 
    user: {},
    errorMessage: undefined
}

export const authenticatedState = {
    status: 'authenticated', // 'authentidated','not-authenticated' 
    user: {
        uid: 'abc',
        name: 'Nombre prueba'
    },
    errorMessage: undefined
}

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'authentidated','not-authenticated' 
    user: {},
    errorMessage: undefined
}