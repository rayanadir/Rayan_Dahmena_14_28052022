import React from 'react';
import { Link } from 'react-router-dom';
import { COLUMNS } from '../../data/table_columns';
import moment from 'moment';
import { DataGrid, GridToolbarQuickFilter, GridLinkOperator } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

/**
 * 
 * @param {Date} date
 * @returns new date formatted
 */
const formatDate = date => {
  return moment(date).format("L");
}

/**
 * returns a search toolbar
 * @returns {JSX}
 */
const QuickSearchToolbar = () => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  );
}

/**
 * returns the EmployeeList page
 * @returns {JSX}
 */
const EmployeeList = () => {
  document.title = "HRnet - Current Employees";
  let employees = useSelector((state) => state.employees.employees);
  employees = [...new Set(employees.map((employee, index) => { return { ...employee, id: index, startDate: formatDate(employee.startdate), dateOfBirth: formatDate(employee.birthdate) } }))];
  return (
    <main id="employee-div" className="container">
      <header className='header-employee-list'>
        <h1>Current Employees</h1>
        <Link to="/" className='link'>Home</Link>
      </header>
      <section className='table'>
        <div style={{ height: 500, width: '100%', backgroundColor: "white" }}>
          <DataGrid
            rows={employees}
            columns={COLUMNS}
            disableColumnMenu={true}
            rowsPerPageOptions={[10,25,100]}
            components={{ Toolbar: QuickSearchToolbar }}
            initialState={{
              filter: {
                filterModel: {
                  items: [],
                  quickFilterLogicOperator: GridLinkOperator.Or,
                },
              },
            }}
          />
        </div>
      </section>
    </main>
  );
}

export default EmployeeList