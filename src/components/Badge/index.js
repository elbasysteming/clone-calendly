import React from "react";
import { BagdeItem } from "./styles";

export const Bagde = ({ children, type}) => {
    return <BagdeItem type={type}>{children}</BagdeItem>;
};
