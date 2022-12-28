import React from "react";

import { Label, Input, Indicator, Item } from "./styles.js";

export const Checkbox = ({
    value,
    checked,
    onChange,
    name,
    id,
    label,
    disabled = false,
}) => {
    return (
        <Item>
            <Label htmlFor={id} disabled={disabled}>
                {label}
                <Input
                    id={id}
                    type="checkbox"
                    name={name}
                    value={value}
                    disabled={disabled}
                    checked={checked}
                    onChange={onChange}
                />
                <Indicator />
            </Label>
        </Item>
    );
};
