import React from 'react'
import { useSelector } from 'react-redux'
import { useCalendarStore, useUiStore } from '../../hooks'
import { onSetActiveEvent } from '../../store/calendar/CalendarSlice';
import { addHours } from 'date-fns';

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore()
    const { user } = useSelector(state => state.auth);

    const handleClickNew = () => {

console.log(localStorage.getItem('useruid'));
console.log(localStorage.getItem('username'));

        setActiveEvent({
            // _id: new Date().getTime(),
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                id: localStorage.getItem('useruid'),
                name: localStorage.getItem('username'),
            }
            // user: user
        })
        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}>
            <i className="fas fa-plus"></i>

        </button>
    )
}
