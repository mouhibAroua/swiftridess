import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 250, position: 'absolute', top: 1100, left: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tunis</MenuItem>
          <MenuItem value={20}>Ariana</MenuItem>
          <MenuItem value={30}>Ben Arous</MenuItem>
          <MenuItem value={30}>Mannouba</MenuItem>
          <MenuItem value={30}>Bizerte</MenuItem>
          <MenuItem value={30}>Nabeul</MenuItem>
          <MenuItem value={30}>Béja</MenuItem>
          <MenuItem value={30}>Jendouba</MenuItem>
          <MenuItem value={30}>Zaghouan</MenuItem>
          <MenuItem value={30}>Siliana</MenuItem>
          <MenuItem value={30}>Monastir</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}