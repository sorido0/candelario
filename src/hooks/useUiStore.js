import { useDispatch, useSelector } from "react-redux"
import { abrirModal, cerrarModal } from "../store"





export const useUiStore = () => {
  
    // aqui vamos a destructurar el state de redux del uiSlice/sotre
    const {
        verModal
    } = useSelector( state => state.ui )

    // importamos el dispatch de redux
    const pistola = useDispatch()

    // aqui vamos a crear las funciones que van a disparar las acciones
    const abrirModalEnCalendar = () => {
        pistola( abrirModal() )
    }

    const cerrarModalEnCalendar = () => {
        pistola( cerrarModal() )
        console.log("modal cerrado")
    }




    return {
        //** Propiedades  */
        verModal,

        //** Metodos 0 funciones  */
        abrirModalEnCalendar,
        cerrarModalEnCalendar

    }
}
