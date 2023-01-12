import { userCalendarStore, useUiStore } from "../hooks";
import { useEffect } from 'react';



export const ButtonEliminar = () => {

   
    const { eliminarEvento, estaSelecionada  } = userCalendarStore();


    const ElminarEvento = () => {
        
        eliminarEvento();
    }

   

    const estiloBtn = {
        position: 'fixed',
        bottom: '50px',
        right: '10px',
        borderRadius: '100%',
        fontSize: '20px',
        display: estaSelecionada ? 'flex' : 'none'
    }

    

    console.log({ estaSelecionada })

    return (
        <button className="btn btn-primary fab-denger" 
        style={ estiloBtn } 
        onClick={ ElminarEvento }
        >
            <i className="fas fa-trash-alt"></i>
        </button>

    )
}
