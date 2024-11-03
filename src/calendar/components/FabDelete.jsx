import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { onSetActiveEvent } from '../../store/calendar/CalendarSlice';
import { addHours } from 'date-fns';

export const FabDelete = () => {

    const { startDeleteEvent, hasEventSelected } = useCalendarStore()

    // const { closeDateModal } = useUiStore();

    const handleClickDelete = () => {

        startDeleteEvent();
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleClickDelete}
            style={{
                // display: hasEventSelected && closeDateModal ? '' : 'none'
                display: hasEventSelected ? '' : 'none'
            }}>
            <i className="fas fa-trash-alt"></i>

        </button>
    )
}
