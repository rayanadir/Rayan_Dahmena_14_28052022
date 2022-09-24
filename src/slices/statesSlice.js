import { createSlice } from "@reduxjs/toolkit";

const initialSelectState = {
    selected:false,
}

const selectStateSlice = createSlice({
    name:"selectState",
    initialState:initialSelectState,
    reducers:{
        stateSelected: (state) => {
            state.selected=true
        },
        resetSelectedState: (state) => {
            state.selected=false;
        }
    }
})

export const { stateSelected, resetSelectedState } = selectStateSlice.actions

export const selectStateReducer = selectStateSlice.reducer;