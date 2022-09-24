import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux"
import { states } from '../../data/states';
import { departments } from '../../data/departments';
import Select from 'react-select';
import { addEmployee } from '../../slices/employeesSlice'

import {useModal, Modal} from "react-modal-library-rayan-dahmena"
import ElementModal from '../../components/ElementModal/ElementModal';

/**
 * returns the CreateEmployee page
 * @returns {JSX}
 */
const CreateEmployee = () => {
    document.title = "HRnet"

    const dispatch = useDispatch()
    const { isShowing, toggle } = useModal()


    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, onChangeBirthdate] = useState(undefined);
    const [startdate, onChangeStartdate] = useState(undefined);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [isStateSelected, setIsStateSelected] = useState(false)
    const [state, setState] = useState(undefined)
    const [zipCode, setZipCode] = useState(undefined);
    const [isDepartmentSelected, setIsDepartmentSelected] = useState(false) 
    const [department, setDepartment] = useState(undefined)

    const [deptErr, setDeptErr] = useState("");
    const [stateErr, setStateErr] = useState("");

    const saveEmployee = (e) => {
        e.preventDefault();
        if (isStateSelected === false) {
            setStateErr("err")
        }
        if (isDepartmentSelected === false) {
            setDeptErr("err")
        }
        console.log(isStateSelected + ' ' + isDepartmentSelected);
        if (isStateSelected && isDepartmentSelected) {
            setIsStateSelected(false);
            setIsDepartmentSelected(false);
            setDeptErr("");
            setStateErr("")
            const employee = {
                firstName,
                lastName,
                birthdate,
                startdate,
                street,
                city,
                state,
                zipCode,
                department
            }
            dispatch(addEmployee(employee))
            document.getElementById("create-employee").reset();
            setFirstName(""); setLastName("");onChangeBirthdate(undefined);onChangeStartdate(undefined);setStreet("");setCity('');setState(undefined);setZipCode(undefined);setDepartment(undefined);
            document.getElementById('department').value=undefined;
            document.getElementById("state").value=undefined;
            document.getElementById("zip-code").value=null;
            toggle();
        }
    }

    const STATES = [...new Set(states.map((state) => { return { value: state.abbreviation, label: state.name } }))];
    const DEPARTMENTS = [...new Set(departments.map((department) => { return { value: department.name, label: department.name } }))]

    return (
        <React.Fragment>
            <header className="title">
                <h1>HRnet</h1>
                <Link className='link' to='/employee-list'>View Current Employees</Link>
            </header>
            <main>
                <section className="container">
                    <h2>Create Employee</h2>
                    <form action='#' id="create-employee" onSubmit={(e) => { saveEmployee(e) }}>

                        <div className='input-address'>
                            <div className='text-date-input'>
                                <label htmlFor="first-name">First Name</label>
                                <input value={firstName} type="text" id="first-name" required onChange={(e) => { setFirstName(e.target.value) }} />

                                <label htmlFor="last-name">Last Name</label>
                                <input value={lastName} type="text" id="last-name" required onChange={(e) => { setLastName(e.target.value) }} />

                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <DatePicker
                                    value={birthdate}
                                    selected={birthdate}
                                    onChange={(date) => { onChangeBirthdate(date) }}
                                    className='date-input'
                                    id='date-of-birth'
                                    required
                                    showYearDropdown
                                    dateFormat="dd/MM/yyyy"
                                    scrollableYearDropdown
                                    maxDate={new Date()}
                                    yearDropdownItemNumber={new Date().getFullYear() - 1900}
                                />

                                <label htmlFor="start-date">Start Date</label>
                                <DatePicker
                                    value={startdate}
                                    selected={startdate}
                                    onChange={(date) => onChangeStartdate(date)}
                                    className='date-input'
                                    id='start-date'
                                    required
                                    showYearDropdown
                                    dateFormat="dd/MM/yyyy"
                                    yearDropdownItemNumber={30}
                                    scrollableYearDropdown
                                />

                                <label htmlFor="department">Department</label>
                                <Select  id="department" onChange={(e) => { setDepartment(e.label); setIsDepartmentSelected(true); }} options={DEPARTMENTS} placeholder="Select a department" className='select' isMulti={false} />
                                {stateErr==="err" ? <p className='select-required' id='department-required'>Please select a department</p> : null}

                            </div>

                            <fieldset className="address">
                                <legend>Address</legend>

                                <label htmlFor="street">Street</label>
                                <input value={street} id="street" type="text" required onChange={(e) => { setStreet(e.target.value) }} />

                                <label htmlFor="city">City</label>
                                <input value={city} id="city" type="text" required onChange={(e) => { setCity(e.target.value) }} />

                                <label htmlFor="state">State</label>
                                <Select  id="state" onChange={(e) => { setState(e.label); setIsStateSelected(true); }} options={STATES} placeholder="Select a state" className='select' isMulti={false} />
                                {deptErr==="err" ? <p className='select-required' id='state-required'>Please select a state</p> : null} 

                                <label htmlFor="zip-code">Zip Code</label>
                                <input id="zip-code" type="number" required onChange={(e) => { setZipCode(e.target.value) }} />
                            </fieldset>
                        </div>
                        <div className='department_submit'>
                            <button onClick={(e)=> {saveEmployee(e)}} type="submit" className='submit'>Save</button>
                        </div>
                    </form>
                    <Modal element={<ElementModal />} isShowing={isShowing} toggle={toggle} />
                </section>
            </main>
        </React.Fragment>
    )
}

export default CreateEmployee