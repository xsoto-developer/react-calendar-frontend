import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onCloseDatemodal, onOpenDatemodal } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector(state => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDatemodal())
    }

    const closeDateModal = () => {
        dispatch(onCloseDatemodal())
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }


    return {
        //* propiedades
        isDateModalOpen,

        //* metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
}
