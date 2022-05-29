import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeList = () => {
    document.title="HRnet - Current Employees"
  return (
    <React.Fragment>
        <main id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/">Home</Link>
        </main>
    </React.Fragment>
  )
}

export default EmployeeList