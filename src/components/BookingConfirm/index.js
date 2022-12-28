import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
//import { toast } from "react-toastify";
import { Label, Input } from "./styles.js";
import { addBooking } from "../../features/booking/bookingsSlice";
import { Button } from "../Button";
import { updateSesionData } from "../../features/sesion/sesionSlice";
import { useNavigate } from "react-router-dom";
import { MdReplay } from "../Icons";

export const BookingConfirm = ({ bookingData }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [state, setState] = useState({
        error: false,
        loading: false,
        data: bookingData,
    });

    const { error, data } = state;

    const handleChange = e => {
        setState({
            ...state,
            data: { ...data, [e.target.name]: e.target.value },
        });
    };

    const handleSubmitForm = () => {
        try {
            dispatch(
                addBooking(
                    JSON.stringify({
                        ...data,
                        id: uuid(),
                        bookingId: data.bookingId,
                        date: data.date,
                        userId: data.userId,
                        status: true,
                    })
                )
            );
            dispatch(updateSesionData({ showForm: false }));
        } catch (error) {
            setState({ error: true });
            navigate("/");
            return error;
        }

        navigate("/bookings");
    };

    if (error) return <p> An error has occurred 😥 </p>;

    return (
        <div>
            <form onSubmit={e => handleSubmitForm(e)}>
                <Label> Full Name: </Label>
                <Input
                    type="text"
                    name="full_name"
                    value={data.full_name ?? ""}
                    onChange={e => handleChange(e)}
                    required
                />
                <Label> Email: </Label>
                <Input
                    type="email"
                    name="email"
                    value={data.email ?? ""}
                    onChange={e => handleChange(e)}
                    required
                />
                <div>
                    <Button
                        width="200px"
                        background="#1A56DB"
                        colorText="#ffffff"
                        top="15px"
                        value="#0D6EFD">
                        Programar Evento
                    </Button>
                </div>
            </form>
            <Button
                onClick={() => dispatch(updateSesionData({ showForm: false }))}
                width="200px"
                background="#ffffff"
                colorText="#333333"
                border="#1A56DB"
                top="15px"
                value="#0D6EFD">
                <MdReplay /> Ver horas
            </Button>
        </div>
    );
};
