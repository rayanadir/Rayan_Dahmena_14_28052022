import React from 'react'

const EmployeeList = () => {
    document.title="HRnet - Current Employees"
  return (
    <React.Fragment>
        <main id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <a href="index.html">Home</a>
        </main>
    </React.Fragment>
  )
}

export default EmployeeList