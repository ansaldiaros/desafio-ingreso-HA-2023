import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DropdownRecursos } from '../components/DropdownRecursos';
import '../styles/pages/recursospage.css';

export const RecursosPage = () => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        switch (selected) {
            case 'agua':
                navigate('/input', { state: {type: 'L', value: selected }});
                break;
            case 'polvora':
                navigate('/input', { state: {type: 'G', value: selected }});
                break;
            case 'gas':
                navigate('/input', { state: {type: 'Tanque', value: selected }});
                break;
            case 'hojas':
                navigate('/input', { state: {type: 'Unidad', value: selected }});
                break;
            case 'maniobras':
                navigate('/input', { state: {type: 'Equipo', value: selected }});
                break;
        }
    }, [selected]);

    return (
        <div className="recursos-page">
            <DropdownRecursos selected={ setSelected } />
        </div>
    )
}
