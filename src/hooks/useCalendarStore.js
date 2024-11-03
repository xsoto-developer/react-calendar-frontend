import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from '../store/calendar/CalendarSlice';
import { calendarApi } from '../api';
import { convertEventsDateEvents } from '../helpers';
import Swal from 'sweetalert2';
;

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);
    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        try {
            if (calendarEvent.id) {
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
                dispatch(onUpdateEvent({ ...calendarEvent, user }))
                return;
            }
            const { data } = await calendarApi.post('/events', calendarEvent)
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
        } catch (error) {
            console.error(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }

    const startDeleteEvent = async (calendarEvent) => {
        try {

            await calendarApi.delete(`/events/${activeEvent.id}`)
            dispatch(onDeleteEvent());
            return;
        } catch (error) {
            console.log(error)
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
    }


    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsDateEvents(data.msg);
            dispatch(onLoadEvents(events))
            console.log(events);
        } catch (error) {
            console.error('Error cargando eventos')
            console.error(error)
        }
    }


    return {
        //* properties
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //*Metodos
        setActiveEvent,
        startDeleteEvent,
        startLoadingEvents,
        startSavingEvent
    }
}
