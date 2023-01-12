
import { createSlice } from '@reduxjs/toolkit'


// Slice es donde se crean las acciones y los reducers para el store de redux
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        verModal: false
    },
    reducers: {
        abrirModal: (state) => {
            state.verModal = true
        },
        cerrarModal: (state) => {
            state.verModal = false
            console.log(state.verModal)
        },
      
    }
})
// Action creators are generated for each case reducer function
export const { abrirModal, cerrarModal } = uiSlice.actions