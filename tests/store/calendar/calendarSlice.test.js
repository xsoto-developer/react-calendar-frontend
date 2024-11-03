import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadCalendar, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventsState, events, initialState } from "../../fixtures/calendarState";

describe('Pruebas en calendarSlice', () => {
    test('Debe de regresar el estado por defeecto', () => {
        // const state = calendarSlice.getInitialState();
        // expect(state).toEqual(initialState)
    });

    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onSetActiveEvent(events[0]))
        console.log(state)
        expect(state.activeEvent).toEqual(events[0]);
    });

    test('onAddNewEvent wdebe de agregar un nuevo evento', () => {
        const newEvent = {
            id: '3',
            start: new Date('2024-10-21 13:00:00'),
            end: new Date('2024-10-21 20:00:00'),
            title: 'Titulo del Event 4',
            notes: 'Notas del evento 4 ',
        };
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onAddNewEvent(newEvent));
        expect(state.events).toEqual([...events, newEvent])
    });

    test('onUpdateEvent debe de actualizar un nuevo evento', () => {
        const updateEvent = {
            id: '1',
            start: new Date('2024-10-21 13:00:00'),
            end: new Date('2024-10-21 20:00:00'),
            title: 'Titulo del Event 1 actualizado',
            notes: 'Notas del evento actualizado ',
        };
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onUpdateEvent(updateEvent));
        expect(state.events).toContain(updateEvent)
    });

    test('OnDeleteEvent debe de borrar el evento activo', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onDeleteEvent())
        expect(state.activeEvent).toBe(null)
        expect(state.events).not.toContain(events[0])
    });
    test('onLoadEvent debe de establecer los eventos', () => {
        const state = calendarSlice.reducer(initialState, onLoadEvents(events));
        expect(state.isLoadingEvents).toBeFalsy()
        expect(state.events).toEqual(events)
        
        const newState = calendarSlice.reducer(state, onLoadEvents(events));
        expect(state.events.length).toEqual(events.length)


        // initialState
    });
    // test('onLogoutCalendar debe de limpiar el estado', () => {
    //     const state = calendarSlice.reducer(calendarWithActiveEventsState, onLogoutCalendar())
    //     expect(state).toEqual(initialState)
    // });


})