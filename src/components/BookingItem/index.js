import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input, Separator, Details, Row, ErrorMessage } from "./styles";
import { Fragment } from "react";
import { validateTimeFormat } from "../../functions/date";
import {
    addItem,
    updateItem,
    deleteItem,
} from "../../features/booking/bookingsTypeSlice";
//import { checkOverlap } from "../../functions/date";

export const BookingItem = ({ values }) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        data: { ...values },
    });

    const [errors, setErrors] = useState({});

    const { data } = state;

    useEffect(() => {
        setState({ ...data, data: { ...values } });
        //checkOverlap(values);
    }, [values]);

    /* Funciones del componente*/
    const handleOnChange = (event, index) => {
        const name = event.target.name;
        const value = event.target.value;
        /*Actualiza items en Redux*/
        dispatch(updateItem({ day: data.day, index, name, value }));

        const result = validateTimeFormat(event, value);
        console.log(result);
        setErrors({ ...errors, ...result });
    };

    const handleOnClickAdd = () => {
        const item = { from: "08:00", to: "17:00" };
        /*Agrega items en Redux*/
        dispatch(addItem({ day: data.day, data: item }));
    };

    const handleOnClickDelete = index => {
        /*Desactiva o activa items en Redux*/
        dispatch(deleteItem({ day: data.day, index }));
    };

    return (
        <Fragment>
            {data.status && (
                <Fragment>
                    <Row>
                        {data.schedule &&
                            data.schedule.map((element, index) => {
                                return (
                                    <div key={index}>
                                        <Details>
                                            <div>
                                                <Input
                                                    type="text"
                                                    name="from"
                                                    value={
                                                        data.schedule[index]
                                                            .from ?? ""
                                                    }
                                                    onChange={event =>
                                                        handleOnChange(
                                                            event,
                                                            index
                                                        )
                                                    }
                                                    required
                                                />
                                                {errors.time && (
                                                    <ErrorMessage>
                                                        {errors.time.message}
                                                    </ErrorMessage>
                                                )}
                                            </div>
                                            <div>
                                                <Separator>-</Separator>
                                            </div>
                                            <div>
                                                <Input
                                                    type="text"
                                                    name="to"
                                                    value={
                                                        data.schedule[index]
                                                            .to ?? ""
                                                    }
                                                    onChange={event =>
                                                        handleOnChange(
                                                            event,
                                                            index
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div>
                                                {index === 0 && (
                                                    <Separator
                                                        onClick={() => {
                                                            handleOnClickAdd();
                                                        }}>
                                                        Agregar bloque
                                                    </Separator>
                                                )}
                                                {index > 0 && (
                                                    <Separator
                                                        onClick={() => {
                                                            handleOnClickDelete(
                                                                index
                                                            );
                                                        }}>
                                                        Eliminar
                                                    </Separator>
                                                )}
                                            </div>
                                        </Details>
                                    </div>
                                );
                            })}
                    </Row>
                </Fragment>
            )}
        </Fragment>
    );
};
