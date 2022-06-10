import React from 'react';
import { Link } from 'react-router-dom';
import { COLUMNS } from '../../data/table_columns';
import moment from 'moment';
import { DataGrid, GridToolbarQuickFilter, GridLinkOperator } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const formatDate = date => {
  return moment(date).format("L");
}

const getEmployees = () => {
  let employees = [
    {
      firstName: "Prénom",
      lastName: "Nom",
      startDate: formatDate(new Date("01-01-2022")),
      department: "Legal",
      dateOfBirth: formatDate(new Date("01-10-2022")),
      street: "b",
      city: "Paris",
      state: "AL",
      zipCode: 1
    },
    {
      firstName: "Firstname",
      lastName: "Lastname",
      startDate: formatDate(new Date("01-14-2021")),
      department: "Marketing",
      dateOfBirth: formatDate(new Date("10-05-2022")),
      street: "c",
      city: "New York",
      state: "NY",
      zipCode: 2
    },
  ]
  employees = [...new Set(employees.map((employee, index) => { return { ...employee, id: index } }))];
  console.log(employees);
  return employees;
}

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

const EmployeeList = () => {
  document.title = "HRnet - Current Employees";
  return (
    <main id="employee-div" className="container">
      <header className='header-employee-list'>
        <h1>Current Employees</h1>
        <Link to="/" className='link'>Home</Link>
      </header>

      <section className='table'>
        <div style={{ height: 400, width: '100%', backgroundColor: "white" }}>
          <DataGrid
            rows={getEmployees()}
            columns={COLUMNS}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnMenu={true}
            components = {{Toolbar : QuickSearchToolbar}}
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