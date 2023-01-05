import { useState } from 'react';
import Modal from 'react-modal';






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

    const [abreModal, setabreModal] = useState(true)

    const abriModal = () => {
        console.log('abriModal');
       // setabreModal(true);
    }

    const cerrarModal = () => {
        console.log('cerrarModal');
        setabreModal(false);
    }



    return (
        <>
            <Modal
                isOpen={ abreModal }
                onAfterOpen={ abriModal }
                onRequestClose={ cerrarModal }
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={ 200 }
            >
                <h2>Modal</h2>
            </Modal>
        </>
    )
}


