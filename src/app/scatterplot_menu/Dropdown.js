
import React, { useState } from "react";

export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
    <select
      id={id}
      onChange={(event) => onSelectedValueChange(event.target.value)}
    >
      <option value=""></option>
      {options.map(({ value, label }) => (
        <option value={value} selected={value === selectedValue}>
          {label}
        </option>
      ))}
    </select>
  );