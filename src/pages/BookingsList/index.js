import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header, Table } from "./styles";
import { formatDate } from "../../functions/date";
import { Bagde } from "../../components/Badge";

export const BookingsList = () => {
    const bookings = useSelector(state => state.bookings);
    const bookingsType = useSelector(state => state.bookingsType.list);

    const [state, setState] = useState({
        data: [],
        loading: false,
        error: false,
    });

    const { data } = state;

    useEffect(() => {
        const bookingExists = async () => {
            try {
                const data = bookings.map(item => {
                    const bookingData = bookingsType.find(
                        element => element.id === item.bookingId
                    );
                    return { ...bookingData, ...item };
                });
                setState({ ...state, loading: false, data });
            } catch (error) {
                setState({ ...state, loading: false, error: true });
            }
        };

        bookingExists();
    }, [bookings]);

    return (
        <div className="container">
            <Header>
                <h1>Eventos programados</h1>
            </Header>
            <Table>
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Hora</th>
                        <th>Evento</th>
                        <th>Duración</th>
                        <th>Dueño</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {formatDate(
                                            element.date,
                                            "DD MMMM YYYY"
                                        )}
                                    </td>
                                    <td>
                                        {formatDate(element.date, "HH: mm")}
                                    </td>
                                    <td>{element.title}</td>
                                    <td>{`${element.duration} min`}</td>
                                    <td>{element.full_name}</td>
                                    <td>
                                        <Bagde
                                            type={
                                                element.status
                                                    ? "success"
                                                    : "danger"
                                            }>
                                            {element.status
                                                ? "Activo"
                                                : "Cancelado"}
                                        </Bagde>
                                    </td>
                                    <td>
                                        <Bagde type="success">Test</Bagde>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
            {bookings.length < 1 && <div>No bookings found 🤯</div>}
        </div>
    );
};
