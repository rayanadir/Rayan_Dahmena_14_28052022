import React from 'react'
import { Link } from 'react-router-dom'
import Select from '../../components/select/Select'

const CreateEmployee = () => {
    document.title = "HRnet"
    const saveEmployee = () => {
        console.log("save employee");
    }
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
                        <input id="date-of-birth" type="date" required />

                        <label htmlFor="start-date">Start Date</label>
                        <input id="start-date" type="date" required />

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