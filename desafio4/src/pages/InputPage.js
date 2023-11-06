import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { DropdownRecursos } from '../components/DropdownRecursos';
import { InputRecursos } from '../components/InputRecursos';



export const InputPage = () => {
    const [selected, setSelected] = useState('');
    const [inputValue, setInputValue] = useState(0);
    const [type, setType] = useState('');
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { type, value } = state;
        setSelected(value);
        setType(type);
    }, [state]);

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

    const handleSetInput = (value) => {
        setInputValue(value);
    }

    const handleSubmit = () => {
        navigate('/tabla', { state: { name: selected, value: inputValue }});
    }

    return (
        <div>
            <div>
                <InputRecursos type={type} setInput={ handleSetInput } value={ inputValue } />
            </div>
            <div>
                <DropdownRecursos value={ selected } selected={ setSelected } />
            </div>
            <div>
                <button onClick={handleSubmit}>Ingresar</button>
            </div>
        </div>
    )
}
