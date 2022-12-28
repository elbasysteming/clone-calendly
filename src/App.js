import React from "react";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { FormProvider } from "react-hook-form";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Modal } from "./components/Modal";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
    return (
        <React.StrictMode>
            <FormProvider>
                <Router>
                    <Navbar />
                    <RoutesApp />
                    <Modal />
                </Router>
            </FormProvider>
            <ToastContainer autoClose={3000} hideProgressBar={true} />
            <GlobalStyle />
        </React.StrictMode>
    );
};
