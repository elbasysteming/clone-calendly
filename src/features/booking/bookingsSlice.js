import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            state.push(JSON.parse(action.payload));
        },
    },
});

export const { addBooking, updateShowForm } = bookingsSlice.actions;

export default bookingsSlice.reducer;
