import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { BookingCard } from "../../components/BookingCard";
import { Item, Header, Link } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { deleteBookingType } from "../../features/booking/bookingsTypeSlice";

export const BookingsType = () => {
    const bookings = useSelector(state => state.bookingsType.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickDelete = id => {
        dispatch(deleteBookingType(id));
        toast("The booking has been deleted 😎");
    };

    return (
        <div className="container">
            <Header>
                <h1>Tipos de eventos</h1>
                <div className="rigth">
                    <Button
                        width="200px"
                        background="#1A56DB"
                        colorText="#ffffff"
                        top="0px"
                        onClick={() => navigate("/dashboard/booking/create")}
                        value="#0D6EFD">
                        Crear tipo de evento
                    </Button>
                </div>
            </Header>
            <Item>
                {bookings.map(element => {
                    return (
                        <BookingCard key={element.id} {...element}>
                            <Link to={`/dashboard/booking/edit/${element.id}`}>
                                Editar
                            </Link>
                            <Button
                                colorText="#1A56DB"
                                onClick={() => handleClickDelete(element.id)}>
                                Eliminar
                            </Button>
                        </BookingCard>
                    );
                })}
            </Item>
            {bookings.length < 1 && <div>No bookings found 🤯</div>}
        </div>
    );
};
