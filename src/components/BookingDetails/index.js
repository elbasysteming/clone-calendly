import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Day, Unavailable, Item } from "./styles";
import { Checkbox } from "../Checkbox";
import { Fragment } from "react";
import { checkItem } from "../../features/booking/bookingsTypeSlice";
import { nameDayOfWeek } from "../../functions/date";
import { BookingItem } from "../BookingItem";
export const BookingDetails = () => {
    const [state, setState] = useState({
        data: [],
    });
    const dispatch = useDispatch();
    const bookingTypeItems = useSelector(state => state.bookingsType.items);
    const { data } = state;

    useEffect(() => {
        setState({ ...data, data: bookingTypeItems[0] });
    }, [bookingTypeItems]);

    /* Funciones del componente*/

    const handleCheckDay = (day, status) => {
        dispatch(checkItem({ day, status }));
    };

    return (
        data &&
        data.map((element, index) => {
            return (
                <Item key={index}>
                    <Checkbox
                        name="availableDay"
                        label=""
                        value={element.status ?? ""}
                        checked={element.status}
                        disabled={false}
                        onChange={() =>
                            handleCheckDay(element.day, !element.status)
                        }
                    />
                    <Day>{nameDayOfWeek(element.day)}</Day>
                    {element.status ? (
                        <Fragment>
                            <BookingItem values={element}></BookingItem>
                        </Fragment>
                    ) : (
                        <Unavailable>Unavailable</Unavailable>
                    )}
                </Item>
            );
        })
    );
};
