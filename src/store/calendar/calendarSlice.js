
import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';


const eventoTemporal = {
    _id: new Date().getTime(),
    title: 'Mi cumpleaños',
    notes: 'Comprarme algo shigon',
    allDay: true,
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Sorido0',
    }


}

const eventoTemporal1 = {
    _id: addHours(new Date().getTime(), 4),
    title: 'Eliiname',
    notes: 'Por favor',
    allDay: true,
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Sorido0',
    }


}


export const candelarSlice = createSlice({
    name: 'candelar',
    initialState: {
        events: [
            eventoTemporal,
            eventoTemporal1
        ],
        eventoActivo: null
    },
    reducers: {
        enventoSelecionado: (state, { payload }) => {
            //console.log(payload);
            state.eventoActivo = payload
        },
        noEnventoSelecionado: (state) => {
            // console.log("no hay evento seleccionado");
            state.eventoActivo = null
        },
        onCrearNuevoEvento: (state, { payload }) => {
            console.log(payload);
            state.events.push(payload);
            state.eventoActivo = null
        },
        onActualizarEvento: (state, { payload }) => {
            state.events = state.events.map(event => {
                // e => (e.id === payload.id) ? payload : e
                if (event.id === payload.id) {
                    return payload
                }
                return event;
                 }
            )
        },
        onEliminarEvento: (state) => {
            if (state.eventoActivo) {
               
                state.events = state.events.filter(event => event._id !== state.eventoActivo._id)
                console.log(state.events);
                state.eventoActivo = null
            }
        }


    }
})
// Action creators are generated for each case reducer function
export const { enventoSelecionado, noEnventoSelecionado, onCrearNuevoEvento, onActualizarEvento, onEliminarEvento } = candelarSlice.actions