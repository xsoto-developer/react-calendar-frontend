import axios from 'axios'
// import React from 'react'
import { getEnvVariable } from '../helpers';
// import { calendarApi } from '.';
// import { config } from 'localforage';

const { VITE_API_URL } = getEnvVariable();

const CalendarApi = axios.create({

    baseURL: VITE_API_URL

});

// Todo: configurar interceptores
CalendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default CalendarApi;