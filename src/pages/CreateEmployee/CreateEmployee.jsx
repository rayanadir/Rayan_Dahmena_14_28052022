import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux"
import { states } from '../../data/states';
import { departments } from '../../data/departments';
import Select from 'react-select';
import { stateSelected } from '../../slices/statesSlice';
import { departmentSelected } from '../../slices/departmentSlice';

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

    const saveEmployee = (e) => {
        e.preventDefault();
        if (isStateSelected === false) {
            document.getElementById("state-required").style.display = "block"
        }
        if (isDepartmentSelected === false) {
            document.getElementById("department-required").style.display = "block"
        }
        if (isStateSelected && isDepartmentSelected) {
            const employees = JSON.parse(localStorage.getItem('employees')) || [];
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
            employees.push(employee);
            localStorage.setItem('employees', JSON.stringify(employees));
            toggle();
        }
    }
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, onChangeBirthdate] = useState(null);
    const [startdate, onChangeStartdate] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const isStateSelected = useSelector(state => state.state.selected)
    const [state, setState] = useState(null)
    const [zipCode, setZipCode] = useState(null);
    const isDepartmentSelected = useSelector((state) => state.department.selected)
    const [department, setDepartment] = useState(null)
    useSelector((state) => {
        if (state.state.selected === true) {
            document.getElementById("state-required").style.display = "none"
        }
        if (state.department.selected === true) {
            document.getElementById("department-required").style.display = "none"
        }
    });

    const STATES = [...new Set(states.map((state) => { return { value: state.abbreviation, label: state.name } }))];
    const DEPARTMENTS = [...new Set(departments.map((department) => { return { value: department.name, label: department.name } }))]

    return (
        <React.Fragment>
            <header className="title">
                <h1>HRnet</h1>
                <Link className='link' to='/Rayan_Dahmena_14_28052022/employee-list'>View Current Employees</Link>
            </header>
            <main>
                <section className="container">
                    <h2>Create Employee</h2>
                    <form action='#' id="create-employee" onSubmit={(e) => { saveEmployee(e) }}>

                        <div className='input-address'>
                            <div className='text-date-input'>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" required onChange={(e) => { setFirstName(e.target.value) }} />

                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" required onChange={(e) => { setLastName(e.target.value) }} />

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
                                <Select onChange={(e) => { setDepartment(e.label); dispatch(departmentSelected()) }} options={DEPARTMENTS} placeholder="Select a department" className='select' isMulti={false} />
                                <p className='select-required' id='department-required'>Please select a department</p>

                            </div>

                            <fieldset className="address">
                                <legend>Address</legend>

                                <label htmlFor="street">Street</label>
                                <input id="street" type="text" required onChange={(e) => { setStreet(e.target.value) }} />

                                <label htmlFor="city">City</label>
                                <input id="city" type="text" required onChange={(e) => { setCity(e.target.value) }} />

                                <label htmlFor="state">State</label>
                                <Select onChange={(e) => { setState(e.label); dispatch(stateSelected()) }} options={STATES} placeholder="Select a state" className='select' isMulti={false} />
                                <p className='select-required' id='state-required'>Please select a state</p>

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