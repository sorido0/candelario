


import { Calendar } from 'react-big-calendar'

// Idioma ingles {import enUS from 'date-fns/locale/en-US'}



import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, valoresEnEspanol } from './../helpers';
import { EventoCalendario, ViewModel } from './componentes';
import { useMemo } from 'react';
import { useUiStore, userCalendarStore } from './../hooks';
import { ButtonCreate } from './../componentes/ButtonCreate';
import { ButtonEliminar } from '../componentes/ButtonEliminar';







export const ViewCanlendario = (props) => {

  const { abrirModalEnCalendar } = useUiStore();
  const { events, selecionarEventoCa, noEnventoSelecionadoCa } = userCalendarStore();


  // Importamos useState para poder cambiar el estado de la variable vistaCalen
  //const [vistaCalen, setvistaCalen] = useState( localStorage.getItem('vistaCalen') || "month")



  /* event es el evento que se esta mostrando
 start es la fecha de inicio del evento
 end es la fecha de finalizacion del evento
 isSelected es un booleano que indica si el evento esta seleccionado o no*/

  const stelysEvent = (event, start, end, isSelected) => {
    //console.log(event, start, end, isSelected)

    const style = {
      backgroundColor: '#000',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  };

  const DobleCLick = () => {
    abrirModalEnCalendar();
  }

  const selecionEvento = (event) => {
    console.log({ sorido0: event })
    selecionarEventoCa(event)
   // noEnventoSelecionadoCa(event)
  }

  const vistaCalendario = (event) => {
    //console.log({ vistaCalendario: event })

    // Guardamos la vista en el localstorage
    localStorage.setItem('vistaCalen', event)
    //setvistaCalen(event)

    // Ocultal el boto de eliminar 
    //noEnventoSelecionadoCa()
    return event
  }

  const vistaCalen = useMemo(() => {
    return localStorage.getItem('vistaCalen') || "month"
  }, [])


  return (
    <>
      <div className='m-5'>
        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          defaultView={vistaCalen}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={valoresEnEspanol()}
          eventPropGetter={stelysEvent}
          components={{
            events: EventoCalendario
          }}
          onDoubleClickEvent={DobleCLick}
          onSelectEvent={selecionEvento}
          onView={vistaCalendario}
        />
      <ViewModel />
      <ButtonCreate />
      <ButtonEliminar />

      </div>

    </>
  )

};