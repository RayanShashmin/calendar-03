import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      width: '150vh'
    }}>
      <div style={{
        width: '30%',
        backgroundColor: 'lightgrey',
        padding: '20px',
        borderRadius: '40px',
      }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </div>
    </div>
  );
}
