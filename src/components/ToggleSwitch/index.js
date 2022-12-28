import React from "react";
import {Label, Input, Slider, Title }  from './styles.js'


export const ToggleSwitch  = ({
    value,
    checked,
    onChange,
    name,
    id,
    disabled,
    title,
    size
  }) => {
    return (
      <div className="text-vertical-center">
        <Title>{title}</Title>
        <Label disabled={disabled} size={size}>
          <Input
            id={id}
            type="checkbox"
            name={name}
            value={value}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
          />
          <Slider />
        </Label> 
      </div>
    );
  }
  