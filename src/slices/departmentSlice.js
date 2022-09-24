import { createSlice } from '@reduxjs/toolkit';

const initialSelectDepartment = {
    selected:false,
}

const selectDepartmentSlice = createSlice({
    name:"selectDepartment",
    initialState: initialSelectDepartment,
    reducers:{
        departmentSelected: (state) => {
            state.selected=true;
        },
        resetSelectDepartment: (state) => {
            state.selected=false;
        }
    }
})

export const { departmentSelected, resetSelectDepartment } = selectDepartmentSlice.actions;

export const selectDepartmentReducer = selectDepartmentSlice.reducer;