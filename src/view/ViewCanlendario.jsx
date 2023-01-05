


import { Calendar } from 'react-big-calendar'

// Idioma ingles {import enUS from 'date-fns/locale/en-US'}

import { addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer, valoresEnEspanol } from './../helpers';
import { EventoCalendario, ViewModel } from './componentes';
import { useMemo, useState } from 'react';


const miEvento = [{
  title: 'Mi cumpleaños',
  notes: 'Comprarme algo shigon',
  allDay: true,
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Sorido0',
  },

}]

export const ViewCanlendario = (props) => {

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

  const DobleCLick = (event) => {
    console.log({ DobleCLick: event })
  }

  const selecionEvento = (event) => {
    console.log({ selecionEvento: event })
  }

  const vistaCalendario = (event) => {
    //console.log({ vistaCalendario: event })

    // Guardamos la vista en el localstorage
    localStorage.setItem('vistaCalen', event)
    //setvistaCalen(event)
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
          events={miEvento}
          defaultView={vistaCalen}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={valoresEnEspanol()}
          eventPropGetter={stelysEvent}
          components={{
            event: EventoCalendario
          }}
          onDoubleClickEvent={DobleCLick}
          onSelectEvent={selecionEvento}
          onView={vistaCalendario}
        />
      </div>

          <ViewModel />
    </>
  )

};