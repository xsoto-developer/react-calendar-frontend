import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//     id: new Date().getTime(),
//     title: 'Event 1',
//     notes: 'Notas',
//     start: new Date(),
//     //end: new Date(),
//     end: addHours(new Date(), 2),
//     //end: addHours(new Date(2014, 6, 10, 23, 0), 2),
//     bgColor: '#fafafa',
//     user: {
//         id: 1,
//         name: 'Juan',
//     }
// };

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        // events: [tempEvent],
        events: [],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;

        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event.id === payload.id) {
                    return payload;
                }
                return event;
            })
        },
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(event => event.id !== state.activeEvent.id);
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            //state.events = payload;
            payload.forEach(event => {
                const exists = state.events.some(dbEvent => dbEvent.id === event.id);
                if (!exists) {
                    state.events.push(event)
                }
            })
        },
        onLoadCalendar: (state) => {
            state.isLoadingEvents = true,
                state.events = [],
                state.activeEvent = null

        }

    }
});

export const {
    onAddNewEvent,
    onDeleteEvent,
    onLoadCalendar,
    onLoadEvents,
    onSetActiveEvent,
    onUpdateEvent,
} = calendarSlice.actions;