import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";
import { bookingDetails } from "../../components/BookingDetails/bookingDetails";

const initialState = {
    list: [
        {
            id: "1",
            title: "Asesoría de 15 min",
            url: "elbasysteming",
            duration: 30,
            description: "description",
            location: "P",
            paddingMinutes: 0,
            latestAvailabilityDays: 30,
            redirectUrl: "",
            requiredPayment: true,
            availableTime: [
                {
                    day: 0,
                    schedule: [{ from: "09:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 1,
                    schedule: [{ from: "09:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 2,
                    schedule: [{ from: "10:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 3,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: true,
                },
                {
                    day: 4,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: true,
                },
                {
                    day: 5,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: true,
                },
                {
                    day: 6,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: true,
                },
            ],
            status: true,
        },
        {
            id: "2",
            title: "Asesoría de 30 min",
            url: "url",
            duration: 15,
            description: "description",
            location: "O",
            paddingMinutes: 0,
            latestAvailabilityDays: 30,
            redirectUrl: "",
            requiredPayment: false,
            availableTime: [
                {
                    day: 0,
                    schedule: [{ from: "09:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 1,
                    schedule: [{ from: "09:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 2,
                    schedule: [{ from: "10:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 3,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: true,
                },
                {
                    day: 4,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: true,
                },
                {
                    day: 5,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: false,
                },
                {
                    day: 6,
                    schedule: [{ from: "11:00", to: "19:00" }],
                    status: false,
                },
            ],
            status: true,
        },
    ],
    items: [],
};

export const bookingsTypeSlice = createSlice({
    name: "bookingsType",
    initialState,
    reducers: {
        addBookingType: (state, action) => {
            state.list.push(action.payload);
        },
        editBookingType: (state, action) => {
            const { id } = action.payload;
            const booking = state.list.find(element => element.id === id);
            if (booking) {
                Object.keys(action.payload).map(element => {
                    if (element !== "id")
                        booking[element] = action.payload[element];
                });
            }
        },
        deleteBookingType: (state, action) => {
            const booking = state.list.find(
                element => element.id === action.payload
            );
            if (booking) {
                state.list.splice(state.list.indexOf(booking), 1);
            }
        },
        getBookingItems: (state, action) => {
            const { id } = action.payload;
            const copyState = current(state.list);
            let items = [];

            if (id) {
                const index = copyState.findIndex(element => element.id === id);
                if (index >= 0) {
                    items = copyState[index].availableTime;
                }
            } else {
                items = bookingDetails;
            }
            return {
                ...state,
                items: [items],
            };
        },
        addItem: (state, action) => {
            const { day, data } = action.payload;
            const item = state.items[0].find(element => element.day === day);
            if (item) {
                item.schedule.push(data);
            }
        },
        updateItem: (state, action) => {
            const { day, index, name, value } = action.payload;
            const nextState = produce(state.items, draftState => {
                draftState[0][day].schedule[index][name] = value;
            });

            return {
                ...state,
                items: { ...nextState },
            };
        },
        checkItem: (state, action) => {
            const { day, status } = action.payload;
            const item = state.items[0].find(element => element.day === day);
            if (item) {
                item.status = status;
            }
        },
        deleteItem: (state, action) => {
            const { day, index } = action.payload;
            const item = state.items[0].find(element => element.day === day);
            if (item) {
                item.schedule.splice(index, 1);
            }
        },
    },
});

export const {
    addBookingType,
    editBookingType,
    deleteBookingType,
    getBookingItems,
    addItem,
    updateItem,
    checkItem,
    deleteItem,
} = bookingsTypeSlice.actions;

export default bookingsTypeSlice.reducer;
