import React from 'react'
import { states } from '../../data/states'
import { useDispatch } from "react-redux";
import { selectState } from '../../slices/statesSlice';
import { selectDepartment } from '../../slices/departmentSlice';

const Select = (props) => {
    const dispatch= useDispatch();
    return (
        props.name === "state" ?
        <select name="state" id="state" required onChange={(e) => {dispatch(selectState(e.target.value))}}>
            {states.map((state) => {
                return <option key={state.abbreviation} value={state.name}>{state.name}</option>
            })}
        </select>
        :
        props.name === "department" ? 
        <select name="department" id="department" required onChange={(e) => {dispatch(selectDepartment(e.target.value))}}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
        :""
    )
}

export default Select