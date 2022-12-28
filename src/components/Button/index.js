import React from "react";
import { ButtonItem } from "./styles.js";

export const Button = ({
    background = "#FFFFFF",
    colorText = "#333333",
    border = "transparent",
    top = "0px",
    width = "auto",
    children,
    onClick,
    type,
}) => {
    return (
        <ButtonItem
            type={type}
            onClick={onClick}
            background={background}
            colorText={colorText}
            border={border}
            top={top}
            width={width}>
            {children}
        </ButtonItem>
    );
};
