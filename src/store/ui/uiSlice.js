import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false  
    },
    reducers: {
        // increment: (state, /* action */ ) => {
        //     state.counter += 1;
        // },
        onOpenDatemodal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDatemodal: (state) => {
            state.isDateModalOpen = false;
        }
    }
});



export const { onOpenDatemodal, onCloseDatemodal } = uiSlice.actions;