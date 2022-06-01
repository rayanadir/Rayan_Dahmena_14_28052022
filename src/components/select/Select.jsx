import React from 'react'
import { states } from '../../data/states'

const Select = () => {
    return (
        <select name="state" id="state" required>
            {states.map((state) => {
                return <option key={state.abbreviation} value={state.name}>{state.name}</option>
            })}
        </select>
    )
}

export default Select