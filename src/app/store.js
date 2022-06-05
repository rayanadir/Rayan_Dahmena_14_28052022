import { configureStore } from "@reduxjs/toolkit";
import { selectStateReducer } from "../slices/statesSlice";
import { selectDepartmentReducer } from "../slices/departmentSlice";

export const store = configureStore({
    reducer:{
        state: selectStateReducer,
        department : selectDepartmentReducer
    },
})