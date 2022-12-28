import React from "react";
import { SpinnerItem, Item } from "./styles.js";

export const Spinner = ({ msg = "Loading..." }) => {
    return (
        <Item>
            <div>
                <SpinnerItem />
                <p>{msg}</p>
            </div>
        </Item>
    );
};
