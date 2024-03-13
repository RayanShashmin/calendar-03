import React, { useState } from "react";
import { MenuItem, Select, FormControl } from "@mui/material";

export default function DropDown() {
    const [selectedValue, setSelectedValue] = useState("20");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl>
            <Select labelId="label" id="select" value={selectedValue} onChange={handleChange}>
                <MenuItem value="10">IT Section</MenuItem>
                <MenuItem value="20">HR Section</MenuItem>
            </Select>
        </FormControl>
    );
}

