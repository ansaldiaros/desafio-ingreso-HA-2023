import React from 'react';
import '../styles/components/dropdownrecursos.css';

export const DropdownRecursos = ( { value = "Seleccionar...", selected } ) => {
    return (
        <select className="dropdown-recursos"  defaultValue={ value } name="selectedRecurso" onChange={ (value) => selected(value.target.value)}>
            <option>{ value }</option>
            <option value="agua">Agua</option>
            <option value="polvora">Pólvora</option>
            <option value="gas">Gas</option>
            <option value="hojas">Hojas (filo)</option>
            <option value="maniobras">Equipo maniobras</option>
        </select>
    )
}
