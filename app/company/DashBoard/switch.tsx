import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiSwitch: {
          styleOverrides: {
            track: {
              backgroundColor: 'green',
            },
            switchBase: {
              color: 'red',
              '&.Mui-checked': {
                color: 'green',
              },
            },
          },
        },
      },
    });

const MySwitch = () => {
  const [checked, setChecked] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(true);

  const handleChange = () => {
    if (isSwitchEnabled) {
      setChecked((prev) => !prev);
      setIsSwitchEnabled(false);

      setTimeout(() => {
        setIsSwitchEnabled(true);
      }, 5000);
    }
  };

  return (
    <ThemeProvider theme={theme}>
              <div style={{ marginLeft: '90px',bottom:'250px', position:'absolute', }}>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          size="medium"
        />
      </div>
    </ThemeProvider>
  );
};

export default MySwitch;
