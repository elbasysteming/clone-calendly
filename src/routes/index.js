import React from "react";
import { Routes, Route } from "react-router-dom";
import { Booking } from "../pages/Booking";
import { BookingsType } from "../pages/BookingsType";
import { BookingTypeForm } from "../pages/BookingTypeForm";
import { NoMatch } from "../pages/NoMatch";
import { BookingsList } from "../pages/BookingsList";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Booking />} authed={true} />
            <Route path="/dashboard/bookings" element={<BookingsType />} />
            <Route
                path="/dashboard/booking/create"
                element={<BookingTypeForm />}
            />
            <Route
                path="/dashboard/booking/edit/:id"
                element={<BookingTypeForm />}
            />
            <Route path="/bookings/:url" element={<Booking />} />
            <Route path="/bookings" element={<BookingsList />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};
