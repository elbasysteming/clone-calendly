import { configureStore } from "@reduxjs/toolkit";

import bookingsTypeReducer from "../features/booking/bookingsTypeSlice";
import bookingsReducer from "../features/booking/bookingsSlice";
import sesionReducer from "../features/sesion/sesionSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        bookings: bookingsReducer,
        bookingsType: bookingsTypeReducer,
        sesion: sesionReducer,
        modal: modalReducer,
    },
});
