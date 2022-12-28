import React from "react";
import { Label, Input, Indicator, Item } from "./styles.js";

export const RadioButton = ({
    value,
    onChange,
    name,
    id,
    label,
    disabled,
    checked,
}) => {
    return (
        <Item>
            <Label disabled={disabled}>
                {label}
                <Input
                    id={id}
                    type="radio"
                    role="radio"
                    name={name}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    checked={checked}
                />
                <Indicator />
            </Label>
        </Item>
    );
};
