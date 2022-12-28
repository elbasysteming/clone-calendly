import React, { useState, useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import { Button } from "../../components/Button";
import "react-calendar/dist/Calendar.css";
import "../../styles/react-calendar.css";
import { BookingConfirm } from "../../components/BookingConfirm";
import {
    Card,
    List,
    Hours,
    Grid,
    BookingDetails,
    Column,
    Titulo,
    DateBooking,
} from "./styles.js";
import {
    getRangeHours,
    formatDate,
    getDisabledDays,
    getRangeData,
} from "../../functions/date";
import { updateSesionData } from "../../features/sesion/sesionSlice";

export const Booking = () => {
    const [dateBooking, setDateBooking] = useState(new Date());
    const [rangeHours, setRangeHours] = useState([]);
    const dispatch = useDispatch();
    const params = useParams();
    const bookings = useSelector(state => state.bookingsType.list);
    const sesion = useSelector(state => state.sesion);
    const [disabledDays, setDisabledDays] = useState([]);

    /* State de componente */
    const [state, setState] = useState({
        data: {},
        loading: false,
        error: false,
    });

    const { data } = state;

    const bookingData = () => {
        try {
            setState({ ...state, loading: true });
            const booking = bookings.find(
                element => element.url === params.url
            );

            if (booking) {
                /* Seteamos el state con la data del booking (si lo encontro segun el  url) */
                setState({ ...state, loading: false, data: booking });
                /* Buscamos que dias estan deshabilitados en el booking para configurar el calendario */
                setDisabledDays(getDisabledDays(booking));
                /* Se guardan los datos del booking en redux */
                dispatch(updateSesionData({ url: booking.url }));
            }
        } catch (error) {
            setState({ ...state, loading: false, error: true });
        }
    };

    useEffect(bookingData, []);

    const tileDisabled = useCallback(({ date, view }) => {
        if (view === "month") {
            return disabledDays.some(element => element === date.getDay());
        }
    });

    const onClickDay = dateBooking => {
        dispatch(updateSesionData({ showForm: false }));
        const result = getRangeData(data.availableTime, dateBooking);
        const rangeHours = getRangeHours(
            result.from,
            result.to,
            data.duration,
            dateBooking
        );
        setRangeHours(rangeHours);
    };

    const handleButtonClick = date => {
        bookingData();
        setDateBooking(date);
        dispatch(updateSesionData({ showForm: true }));
    };

    return (
        <div className="container">
            <Card>
                <Grid>
                    <Column border={true}>
                        <BookingDetails>
                            <h1> {data.title} </h1>
                            <div> {data.duration} </div>
                            <div> {data.description} </div>
                        </BookingDetails>
                    </Column>

                    <Column border={true}>
                        <Titulo> Selecciona el día </Titulo>
                        <Calendar
                            onClickDay={(dateBooking, event) =>
                                onClickDay(dateBooking, event)
                            }
                            minDate={new Date()}
                            onChange={setDateBooking}
                            value={dateBooking}
                            tileDisabled={tileDisabled}
                        />
                    </Column>

                    {!sesion.showForm && (data.id ?? "").length > 0 && (
                        <Column>
                            {rangeHours.length > 0 && (
                                <Hours>
                                    <Titulo>Selecciona la hora</Titulo>
                                    <DateBooking>
                                        {formatDate(
                                            dateBooking,
                                            "DD MMMM YYYY"
                                        )}
                                    </DateBooking>
                                    {rangeHours.map((element, index) => {
                                        return (
                                            <List key={index}>
                                                <Button
                                                    width="200px"
                                                    border="#0069FF"
                                                    onClick={() =>
                                                        handleButtonClick(
                                                            element.data
                                                        )
                                                    }>
                                                    <span>
                                                        {`${element.from}`}
                                                    </span>
                                                </Button>
                                            </List>
                                        );
                                    })}
                                </Hours>
                            )}
                        </Column>
                    )}
                    {sesion.showForm && (
                        <Column>
                            <Titulo> Confirmar Evento </Titulo>
                            <DateBooking>
                                {formatDate(
                                    dateBooking,
                                    "DD MMMM YYYY, hh:mm A"
                                )}
                            </DateBooking>
                            <BookingConfirm
                                bookingData={{
                                    bookingId: data.id,
                                    userId: sesion.userId,
                                    date: dateBooking,
                                }}
                            />
                        </Column>
                    )}
                </Grid>
            </Card>
        </div>
    );
};
