import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from '../../components/select/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEmployee = () => {
    document.title = "HRnet"
    const saveEmployee = () => {
        console.log("save employee");
    }
    const [birthdate, onChangeBirthdate] = useState(undefined);
    const [startdate, onChangeStartdate] = useState(undefined);
    return (
        <React.Fragment>
            <header className="title">
                <h1>HRnet</h1>
            </header>
            <main>
                <section className="container">
                    <Link to='/employee-list'>View Current Employees</Link>
                    <h2>Create Employee</h2>
                    <form action="#" id="create-employee">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" required />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" required />

                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker
                            value={birthdate}
                            selected={birthdate}
                            onChange={(date) => onChangeBirthdate(date)}
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
                            yearDropdownItemNumber={80}
                            scrollableYearDropdown
                        />

                        <fieldset className="address">
                            <legend>Address</legend>

                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" required />

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" required />

                            <label htmlFor="state">State</label>
                            <Select />

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" required />
                        </fieldset>

                        <label htmlFor="department">Department</label>
                        <select name="department" id="department" required>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                        <button onClick={saveEmployee} type='submit' className='submit'>Save</button>
                    </form>
                    <div id="confirmation" className="modal">Employee Created!</div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default CreateEmployee