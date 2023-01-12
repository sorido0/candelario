
import { useSelector, useDispatch } from 'react-redux';
import { enventoSelecionado, onCrearNuevoEvento, onActualizarEvento, onEliminarEvento, noEnventoSelecionado } from '../store';


export const userCalendarStore = () => {

    // Llamamos el dispatch de redux
    const pistola = useDispatch();

    // aqui vamos a destructurar el state de redux del uiSlice/sotre
    const {
        events,
        eventoActivo
    } = useSelector(state => state.calendar)

    const selecionarEventoCa = (calenEnvent) => {
        //console.log(calenEnvent)
        pistola(enventoSelecionado(calenEnvent))

    }

    const noEnventoSelecionadoCa = () => {
        //console.log(calenEnvent);
        pistola(noEnventoSelecionado())


    }

    const crearNuevaEvento = async (calenEnvent) => {

        //console.log("creando nuevo evento");
        if (calenEnvent._id) {
            pistola(onActualizarEvento({...calenEnvent}))
        } else {
            pistola(onCrearNuevoEvento({ ...calenEnvent, _id: new Date().getTime() }))
        }
    }

    const eliminarEvento = () => {
        pistola(onEliminarEvento())
    }

  


    return {
        //** Propiedades  */
        events,
        eventoActivo,
        estaSelecionada: !!eventoActivo,


        //** Metodos 0 funciones  */
        selecionarEventoCa,
        noEnventoSelecionadoCa,
        crearNuevaEvento,
        eliminarEvento
    }
}
