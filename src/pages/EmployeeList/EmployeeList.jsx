import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import { COLUMNS } from '../../data/table_columns';
import moment from 'moment';

const formatDate = date => {
  return moment(date).format("DD-MM-YYYY");
}

const employees = [
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

const EmployeeList = () => {
  document.title = "HRnet - Current Employees";

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, []);

  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <main id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table {...getTableProps()} id="employee-table" className="display">
        <thead>
          {
            headerGroups.map((headerGroup) => {
              return <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map((column) => {
                    return <th {...column.getHeaderProps()}>
                      {column.title}
                    </th>
                  })
                }
              </tr>
            })
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>
                        {
                          cell.render('Cell')
                        }
                      </td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </main>
  )
}

export default EmployeeList