import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { RadioButton } from "../../components/RadioButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Spinner } from "../../components/Spinner";
import { BookingDetails } from "../../components/BookingDetails";
import {
    Card,
    Header,
    Body,
    Footer,
    Label,
    TextArea,
    Input,
    Duration,
    BookingTypeItems,
    ErrorMessage,
} from "./styles.js";
import { useBookingForm } from "../../hooks/useBookingForm";
import { schemaBookingType, initalValuesBookingType } from "../../schemas";
import { getBookingItems } from "../../features/booking/bookingsTypeSlice";

export const BookingTypeForm = () => {
    const params = useParams();

    /* Custom Hooks */
    const { saveBooking } = useBookingForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const locations = [
        { title: "Presencial", value: "P" },
        { title: "Online", value: "O" },
    ];
    const formOptions = { resolver: yupResolver(schemaBookingType) };
    const bookings = useSelector(state => state.bookingsType.list);

    /* State de componente */
    const [state, setState] = useState({
        data: {},
        loading: false,
        error: false,
    });

    const { data, loading, error } = state;
    const [check, setCheck] = useState(false);

    useEffect(() => {
        dispatch(
            getBookingItems({
                id: params.id,
            })
        );
    }, [params.id]);

    useEffect(() => {
        setState({ ...state, loading: true });
        function initialValues() {
            const booking = bookings.find(element => element.id === params.id);
            const data = booking
                ? { ...booking }
                : { ...initalValuesBookingType };
            setState({ ...state, loading: false, data });
            setCheck(data.requiredPayment);

            /*Setear valores al formulario*/
            Object.keys(data).forEach(element =>
                setValue(element, data[element])
            );
        }
        try {
            initialValues();
        } catch (error) {
            setState({ ...state, loading: false, error: true });
        }
    }, [params.id]);

    /* Funcion de useForm() hook */

    const {
        register,
        formState: { errors },
        setValue,
        handleSubmit,
    } = useForm(formOptions);

    /* Funciones del componente */

    const onSubmit = () => {
        const { loading, error } = saveBooking({ ...data, id: params.id });
        setState({ ...state, error, loading });
        if (!error) {
            navigate("/dashboard/bookings");
            toast("The booking has been created 😎");
        }
    };

    const handleChange = e => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            data: { ...data, [e.target.name]: value },
        });
    };

    const handleChangeCheck = e => {
        setCheck(!check);
        handleChange(e);
    };

    const handleClick = () => {
        navigate("/dashboard/bookings");
    };

    if (error) return <p> An error has occurred 😥 </p>;
    if (loading)
        return (
            <div className="container">
                <Spinner />
            </div>
        );

    return (
        <div className="container">
            <FormProvider
                {...{
                    register,
                    formState: { errors },
                    setValue,
                    handleSubmit,
                }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card>
                        <Header>
                            <h1>
                                {params.id
                                    ? "Editar tipo de evento"
                                    : "Crear tipo de evento"}
                            </h1>
                        </Header>
                        <Body>
                            <Label> Título: </Label>
                            <Input
                                {...register("title")}
                                type="text"
                                name="title"
                                value={data.title ?? ""}
                                onChange={e => handleChange(e)}
                                required
                            />
                            {errors.title && (
                                <ErrorMessage>
                                    {errors.title.message}
                                </ErrorMessage>
                            )}
                            <Label> Enlace: </Label>
                            <Input
                                {...register("url")}
                                type="text"
                                name="url"
                                value={data.url ?? ""}
                                onChange={e => handleChange(e)}
                                required
                            />
                            {errors.url && (
                                <ErrorMessage>
                                    {errors.url.message}
                                </ErrorMessage>
                            )}
                            <Label> Disponibilidad para este evento: </Label>

                            <BookingTypeItems>
                                <BookingDetails />
                            </BookingTypeItems>

                            <Label> Descripción: </Label>
                            <TextArea
                                {...register("description")}
                                type="text"
                                name="description"
                                value={data.description ?? ""}
                                onChange={e => handleChange(e)}
                            />
                            {errors.description && (
                                <ErrorMessage>
                                    {errors.description.message}
                                </ErrorMessage>
                            )}
                            <Label> Tipo de Evento: </Label>
                            <div className="flex">
                                {locations.map((element, key) => (
                                    <RadioButton
                                        key={key}
                                        id={key}
                                        label={element.title}
                                        name="location"
                                        value={element.value ?? ""}
                                        disabled={false}
                                        checked={
                                            data.location === element.value
                                                ? true
                                                : false
                                        }
                                        onChange={e => handleChange(e)}
                                    />
                                ))}
                            </div>
                            <Duration>
                                <div>
                                    <Label> Duración: </Label>
                                    <Input
                                        {...register("duration")}
                                        type="text"
                                        name="duration"
                                        value={data.duration ?? 0}
                                        onChange={e => handleChange(e)}
                                        required
                                    />
                                    {errors.duration && (
                                        <ErrorMessage>
                                            {errors.duration.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div>
                                    <Label>
                                        {/*Padding Minutes:*/} Minutos entre un
                                        evento y otro
                                    </Label>
                                    <Input
                                        {...register("paddingMinutes")}
                                        type="text"
                                        name="paddingMinutes"
                                        value={data.paddingMinutes ?? 0}
                                        onChange={e => handleChange(e)}
                                        required
                                    />
                                    {errors.paddingMinutes && (
                                        <ErrorMessage>
                                            {errors.paddingMinutes.message}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div>
                                    <Label>
                                        {/*Latest Availability Days:*/} Últimos
                                        días de disponibilidad:
                                    </Label>
                                    <Input
                                        {...register("latestAvailabilityDays")}
                                        type="text"
                                        name="latestAvailabilityDays"
                                        value={data.latestAvailabilityDays ?? 0}
                                        onChange={e => handleChange(e)}
                                        required
                                    />
                                    {errors.latestAvailabilityDays && (
                                        <ErrorMessage>
                                            {
                                                errors.latestAvailabilityDays
                                                    .message
                                            }
                                        </ErrorMessage>
                                    )}
                                </div>
                            </Duration>
                            <Label>
                                {/*Confirmation redirect URL (optional):*/}{" "}
                                Enlace de redirección de confirmación:
                            </Label>
                            <Input
                                {...register("redirectUrl")}
                                type="text"
                                name="redirectUrl"
                                value={data.redirectUrl ?? ""}
                                onChange={e => handleChange(e)}
                            />
                            {errors.redirectUrl && (
                                <ErrorMessage>
                                    {errors.redirectUrl.message}
                                </ErrorMessage>
                            )}
                            {/*Charge for this booking*/}
                            <Checkbox
                                name="requiredPayment"
                                label="Requiere de pago para poder reservar"
                                value={
                                    data.requiredPayment ?? false ? true : false
                                }
                                checked={check}
                                disabled={false}
                                onChange={e => handleChangeCheck(e)}
                            />
                        </Body>
                        <Footer>
                            <Button
                                width="170px"
                                type="button"
                                background="#FFFFFF"
                                colorText="#333333"
                                border="#1A56DB"
                                onClick={() => handleClick()}
                                top="0px">
                                Cancelar
                            </Button>
                            <Button
                                width="170px"
                                type="submit"
                                background="#1A56DB"
                                colorText="#ffffff"
                                top="0px">
                                Guardar cambios
                            </Button>
                        </Footer>
                    </Card>
                </form>
            </FormProvider>
        </div>
    );
};
