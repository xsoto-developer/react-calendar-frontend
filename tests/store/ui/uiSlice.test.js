import { onCloseDatemodal, onOpenDatemodal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('Pruebas en uiSlice', () => {
    test('Debe de regresar el estado por defecto', () => {

        // TODO si la validacion trata de verificar que no se adicione las estados realizar el siguiente test
        expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });

        // TODO si solo se trata de validar que la propiedad isDateModalOpen mantenga su estado inicial ejecutar el test:
        // expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
    });

    test('debe de cambiar el isDateModalOpen correctamente', () => {
        let state = uiSlice.getInitialState();
        state = uiSlice.reducer(state, onOpenDatemodal())
        expect(state.isDateModalOpen).toBeTruthy();

        state = uiSlice.reducer(state, onCloseDatemodal())
        expect(state.isDateModalOpen).toBeFalsy();
    })
})