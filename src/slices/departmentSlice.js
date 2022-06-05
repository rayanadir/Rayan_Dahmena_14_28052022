import { createSlice } from '@reduxjs/toolkit';

const initialSelectDepartment = {
    department: "Sales"
}

const selectDepartmentSlice = createSlice({
    name:"selectDepartment",
    initialState: initialSelectDepartment,
    reducers:{
        selectDepartment: (state,action) => {
            state.department=action.payload
        }
    }
})

export const { selectDepartment } = selectDepartmentSlice.actions;

export const selectDepartmentReducer = selectDepartmentSlice.reducer;