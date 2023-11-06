import React from 'react'

export const InputRecursos = ({ setInput, type, value="" }) => {
    return (
        <>
            <input type="number" min="1" pattern="^[0-9]+" value={value} onChange={ (value) => setInput(value.target.value)} />
            <label>{ type }</label>
        </>
    )
}
