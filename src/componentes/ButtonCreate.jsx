import { userCalendarStore, useUiStore } from "../hooks";



export const ButtonCreate = () => {

    const { abrirModalEnCalendar } = useUiStore();
    const { selecionarEventoCa  } = userCalendarStore();


    const newEvento = () => {
        
        selecionarEventoCa({
            title: 'mmg',
            notes: 'si',
            allDay: true,
            start: new Date(),
            end: new Date(),
            use: {
                id: 1,
                name: 'Angel Soriano'
            }
        })
        abrirModalEnCalendar();
    }


    const estiloBtn = {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        borderRadius: '100%',
        fontSize: '20px',
    }

    return (
        <button className="btn btn-primary" 
        style={ estiloBtn } 
        onClick={ newEvento }
        >
            <i className="fas fa-plus"></i>
        </button>

    )
}
