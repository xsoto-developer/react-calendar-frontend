export const events = [
    {
        id: '1',
        start: new Date('2024-10-09 18:00:00'),
        end: new Date('2024-10-09 20:00:00'),
        title: 'Titulo del Event 1',
        notes: 'Notas del evento 1 ',

    },
    {
        id: '2',
        start: new Date('2024-10-10 18:00:00'),
        end: new Date('2024-10-10 20:00:00'),
        title: 'Titulo del Event 2',
        notes: 'Notas del evento 2',

    }
];

export const initialState = {
    isLoadingEvents: true,
    events: [

    ],
    activeEvent: null
}

export const calendarWithActiveEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}   