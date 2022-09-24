import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { selectStateReducer } from "../slices/statesSlice";
import { selectDepartmentReducer } from "../slices/departmentSlice";
import { employeesStateReducer } from "../slices/employeesSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    state: selectStateReducer,
    department : selectDepartmentReducer,
    employees: employeesStateReducer,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false/*{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }*/ })
})