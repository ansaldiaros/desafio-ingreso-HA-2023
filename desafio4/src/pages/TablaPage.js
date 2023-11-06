import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { DropdownRecursos } from '../components/DropdownRecursos';
import { InputRecursos } from '../components/InputRecursos';
import moment from 'moment';
import '../styles/pages/tablapage.css';

export const TablaPage = () => {
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [type, setType] = useState('')
    const { state } = useLocation();

    useEffect(() => {
        if(state){
            const { name, value } = state;
            const newArr = [];
            newArr.push({
                id: newArr.length+1,
                name,
                cant: value,
                fechaIngreso: moment().format('YYYY-MM-DD')
            });
            setItems( newArr );
        }
    }, [state]);


    const handleSetInput = (value) => {
        setInputValue(value);
    }
    
    const handleSubmit = () => {
        const newArr = items;
        newArr.push({
            id: items.length+1,
            name: selected,
            cant: inputValue,
            fechaIngreso: moment().format('YYYY-MM-DD')
        });
        setItems( newArr );
        handleSetInput('');
    }

    useEffect(() => {
        switch (selected) {
            case 'agua':
                setType('L');
                break;
            case 'polvora':
                setType('G');
                break;
            case 'gas':
                setType('Tanque');
                break;
            case 'hojas':
                setType('Unidad');
                break;
            case 'maniobras':
                setType('Equipo');
                break;
        }
    }, [selected]);

    return (
        <div className="tabla-page">
            <div className="tabla-page__header">
                <DropdownRecursos selected={ setSelected } />
                <InputRecursos type={ type } setInput={ handleSetInput } value={inputValue}/>
                <button onClick={ handleSubmit }>Ingresar</button>
            </div>
            <div className="tabla-page__body">
                <div className="tabla-page__body-title">
                    <label>Recurso</label>
                    <label>Cantidad</label>
                    <label>Fecha Ingreso</label>
                    <label>Borrar</label>
                </div>
                <div className="tabla-page__body-info">
                    
                    {
                        items.map( (item, index) => (
                            <div className="tabla-page__body-info-row" key={index}>
                                <label>{item.name}</label>
                                <label>{item.cant}</label>
                                <label>{item.fechaIngreso}</label>
                                <button onClick={() => setItems( items.filter(({ id }) => id !== item.id))} className="delete-btn">
                                    <i className="icon-size fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
