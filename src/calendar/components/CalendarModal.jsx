//import ReactModal from "react-modal"
import { addHours } from 'date-fns';
import React from 'react';
import { useMemo, useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import ReactModal from 'react-modal';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es';
import { differenceInSeconds } from 'date-fns/fp';

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import { useMemo } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';


// import { registerLocale, setDefaultLocale } from  "react-datepicker";
registerLocale('es', es)

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

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();

    const { activeEvent, startSavingEvent } = useCalendarStore();

    // const [isOpen, setIsOpen] = useState(true)

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)

    })

    const titleClass = useMemo(() => {
        if (!formSubmitted) return '';

        return (formValues.title.length > 0)
            ? 'is-valid'
            : 'is-invalid';

    }, [formValues.title, formSubmitted])

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValues({ ...activeEvent })
        }

    }, [activeEvent])


    const onInputchange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })

    }

    const onDatechange = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })

    }

    const onCloseModal = () => {
        console.log('Modal closed');
        // setIsOpen(false);
        closeDateModal();
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true)

        // const difference = differenceInSeconds(formValues.end, formValues.start);
        const difference = differenceInSeconds(formValues.start, formValues.end);
        if (isNaN(difference) || difference <= 0) {
            console.log('Error en fehcas ')
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
            return;
        }

        if (formValues.title.length <= 0) return;
        console.log(formValues)
        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmitted(false);
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={onCloseModal}
            // onRequestClose={closeDateModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DatePicker
                        selected={formValues.start}
                        onChange={(event) => onDatechange(event, 'start')}
                        className='form-control'
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        onChange={(event) => onDatechange(event, 'end')}
                        className='form-control'
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputchange}
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
                        value={formValues.notes}
                        onChange={onInputchange}
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

            </form>
        </Modal>
    )
}

