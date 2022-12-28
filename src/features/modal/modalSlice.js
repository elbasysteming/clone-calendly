import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: { id: null, title: null, data: null, url_redirect: null },
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,

    reducers: {
        openModal: (state, action) => {
            action.payload = JSON.parse(action.payload);
            state.modal = {
                id: action.payload.id,
                title: action.payload.title,
                data: action.payload.data,
            };
        },
        closeModal: state => {
            state.modal = {
                id: null,
                title: null,
                data: null,
            };
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
