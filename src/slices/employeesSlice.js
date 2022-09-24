<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    employees: [],
}

const employeesStateSlice = createSlice({
    name:"employeesState",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            console.log(action.payload);
            state.employees.push(action.payload)          
        }
    }
})

export const { addEmployee } = employeesStateSlice.actions

=======
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    employees: [],
}

const employeesStateSlice = createSlice({
    name:"employeesState",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            console.log(action.payload);
            state.employees.push(action.payload)          
        }
    }
})

export const { addEmployee } = employeesStateSlice.actions

>>>>>>> f9c9c78cd54d7becca87c581c00ad311dc484171
export const employeesStateReducer = employeesStateSlice.reducer;