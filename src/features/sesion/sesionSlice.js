import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    showForm: false,
    url: "",
    userId: "elbasysteming",
};

export const sesionSlice = createSlice({
    name: "sesion",
    initialState,
    reducers: {
        updateSesionData: (state, action) => {
            Object.keys(action.payload).map(element => {
                state[element] = action.payload[element];
            });
        },
    },
});

export const { updateSesionData } = sesionSlice.actions;

export default sesionSlice.reducer;
