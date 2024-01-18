"use client"
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './date.css';
export default function BasicDateRangePicker() {
  return (
    <div className='date'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker
          className="custom-date" 
          localeText={{ start: 'Rent Date', end: 'Return Date' }}
        />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
