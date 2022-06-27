import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { selectStateReducer } from "../slices/statesSlice";
import { selectDepartmentReducer } from "../slices/departmentSlice";
import { employeesStateReducer } from "../slices/employeesSlice";

export const store = configureStore({
    reducer:{
        state: selectStateReducer,
        department : selectDepartmentReducer,
        employees: employeesStateReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})