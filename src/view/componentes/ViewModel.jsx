import { useEffect, useState } from 'react';
import Modal from 'react-modal';

// Para sumar horas a una fecha
import { addHours, differenceInSeconds } from 'date-fns';

// El date picker es para seleccionar fechas y horas
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// idiom de la fecha en español
import es from 'date-fns/locale/es'
import Swal from 'sweetalert2';

// * Mis hooks
import { useUiStore, userCalendarStore } from './../../hooks';

// Para sobre escribir el css del modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


// Para sobre poner ante cualquier componente o view
Modal.setAppElement('#root');




export const ViewModel = () => {

    // exportamos los hooks para poder cambiar el estado de la variable
    const { verModal, cerrarModalEnCalendar } = useUiStore();

    // Busucamos en el estado la nota seleccionada
    const { eventoActivo, crearNuevaEvento, eliminarEvento } = userCalendarStore();


    // manejar el estado del modal
    const [abreModal, setabreModal] = useState(true);

    // Manejar el estado del formulario
    const [formValue, setformValue] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    });


    // Para actuliar el valor del input con los valores del usuario
    const handleInputChange = ({ target }) => {
        setformValue({
            ...formValue,
            [target.name]: target.value
        });
    }

    // Para actuliar el valor del input con los valores del usuario cuando la nota esta seleccionada
    useEffect(() => {
        if (eventoActivo !== null) {
            //console.log(eventoActivo);
            setformValue({ ...eventoActivo });
        }
    }, [eventoActivo])




    const { title, notes, start, end } = formValue;
    //console.log(title);

    // Validar el formulario y enviar los datos
    const enviarFormulario = async (e) => {
        e.preventDefault();

        const horasDiferentes = differenceInSeconds(end, start);

        if (isNaN(horasDiferentes) || horasDiferentes <= 0) {
            // console.log('La fecha fin debe ser mayor a la fecha inicio');
            Swal.fire('Error', 'La fecha o hora de finalazacion debe ser mayor a la fecha o hora de inicio', 'error');
            return;
        }


        await crearNuevaEvento(formValue)
        cerrarModal();
        console.log({ title, notes, start, end });

    }


    // Abrir y cerrar el modal
    const abriModal = () => {
        //console.log('abriModal');
        // setabreModal(true);
    }

    const cerrarModal = () => {
        // console.log('cerrarModal');
        // setabreModal(false);
        cerrarModalEnCalendar();
    }

    const eliminarEventoMmodal = () => {
        eliminarEvento();
    }



    return (
        <>
            <Modal
                isOpen={verModal}
                onAfterOpen={abriModal}
                onRequestClose={cerrarModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container" onSubmit={enviarFormulario}>

                    <div className="form-group mb-2">
                        <label>Fecha y hora inicio</label>
                        {/* <input className="form-control" placeholder="Fecha inicio" onClick={ handleStartDateChange }/> */}
                        <DatePicker
                            className="form-control"
                            onChange={(event) => { setformValue({ ...formValue, start: event }) }}
                            selected={formValue.start}
                            dateFormat="Pp"
                            showTimeSelect
                            locale={es}
                            timeCaption="Hora"
                            required
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label>Fecha y hora fin</label>
                        {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                        <DatePicker
                            minDate={formValue.start}
                            className="form-control"
                            onChange={(event) => { setformValue({ ...formValue, end: event }) }}
                            selected={formValue.end}
                            dateFormat="Pp"
                            showTimeSelect
                            locale={es}
                            timeCaption="Hora"
                            required

                        />

                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={title}
                            onChange={handleInputChange}
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>
                   <button
                        onClick={ eliminarEventoMmodal }
                        className="btn btn-outline-primary btn-block"
                        style={{ margin: '5px' }}
                    >
                        <i className="fas fa-trash-alt"></i>
                        <span> Eliminar</span>
                    </button> 

                </form>
            </Modal>
        </>
    )
}


