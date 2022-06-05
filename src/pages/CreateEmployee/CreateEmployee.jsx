import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from '../../components/select/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux"

const CreateEmployee = () => {
    document.title = "HRnet"
    
    const saveEmployee = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee={
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
    }

    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [birthdate, onChangeBirthdate] = useState(null);
    const [startdate, onChangeStartdate] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity]= useState("");
    const state = useSelector((state) => state.state.state);
    const [zipCode, setZipCode] = useState(null);
    const department = useSelector((state) => state.department.department)

    return (
        <React.Fragment>
            <header className="title">
                <h1>HRnet</h1>
            </header>
            <main>
                <section className="container">
                    <Link to='/employee-list'>View Current Employees</Link>
                    <h2>Create Employee</h2>
                    <form action='#' id="create-employee" onSubmit={()=> {saveEmployee()}}>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" required onChange={(e) => {setFirstName(e.target.value)}}/>

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" required onChange={(e) => {setLastName(e.target.value)}}/>

                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker
                            value={birthdate}
                            selected={birthdate}
                            onChange={(date) => {onChangeBirthdate(date)}}
                            className='date-input'
                            id='date-of-birth'
                            required
                            showYearDropdown
                            dateFormat="dd/MM/yyyy"
                            scrollableYearDropdown
                            maxDate={new Date()}
                            yearDropdownItemNumber={new Date().getFullYear()-1900}
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

                        <fieldset className="address">
                            <legend>Address</legend>

                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" required onChange={(e) => {setStreet(e.target.value)}}/>

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" required onChange={(e) => {setCity(e.target.value)}}/>

                            <label htmlFor="state">State</label>
                            <Select name="state"/>

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" required onChange={(e) => {setZipCode(e.target.value)}}/>
                        </fieldset>

                        <label htmlFor="department">Department</label>
                        <Select name="department" />
                        
                        <button type='submit' className='submit'>Save</button>
                    </form>
                    <div id="confirmation" className="modal">Employee Created!</div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default CreateEmployee