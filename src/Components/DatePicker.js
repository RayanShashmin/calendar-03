import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function InputDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DateTimePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
