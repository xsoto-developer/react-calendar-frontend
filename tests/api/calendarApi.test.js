import { calendarApi } from "../../src/api"

describe('Pruebas en el CalendarApi', () => {
    test('Debe de tener la configuracion por defecto', () => {
        // console.log(calendarApi)
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
    });

    test('Debe de tener x-token en todos los headers de todas las peticiones', async () => {
        // localStorage.setItem('x-token','ABC-123-XYZ')
        const token = 'ABC-123-XYZ'
        localStorage.setItem('token', token)

        const  res = await(calendarApi.get('/auth'));
        expect(res.config.headers['x-token']).toBe(token)
    })
})