import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addBookingType,
    editBookingType,
} from "../features/booking/bookingsTypeSlice";
import { v4 as uuid } from "uuid";

export const useBookingForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const availableTime = useSelector(state => state.bookingsType.items[0]);

    const saveBooking = ({ ...data }) => {
        setLoading(true);
        try {
            if (data.id) {
                dispatch(
                    editBookingType({ ...data, id: data.id, availableTime })
                );
            } else {
                dispatch(
                    addBookingType({
                        ...data,
                        id: uuid(),
                        availableTime,
                    })
                );
            }
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        return { error, loading };
    };

    return { saveBooking, error, loading };
};
