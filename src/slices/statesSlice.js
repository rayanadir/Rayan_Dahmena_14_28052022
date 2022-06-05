import { createSlice } from "@reduxjs/toolkit";

const initialSelectState = {
    state:"Alabama"
}

const selectStateSlice = createSlice({
    name:"selectState",
    initialState:initialSelectState,
    reducers:{
        selectState: (state, action) => {
            state.state=action.payload
        }
    }
})

export const { selectState } = selectStateSlice.actions

export const selectStateReducer = selectStateSlice.reducer;