import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const UserOperations: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const updateUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/company/reservation/accept', {
        phoneNumber,
      });

      console.log(response.data);
      setDialogOpen(false); // Close the dialog after submitting the form
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  const deleteReservation = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/api/company/reservation/delete', {
        data: { phoneNumber },
      });

      console.log(response.data);
      setDialogOpen(false); // Close the dialog after submitting the form
    } catch (error) {
      console.error('Error deleting reservation:', error.message);
    }
  };

  return (
    <div>
      <br />
      <button className="buttonss" onClick={() => setDialogOpen(true)}>
        Update Reservations
      </button>
      
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Reservation Form</DialogTitle>
        <DialogContent>
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={updateUser} color="primary">
            Accept Reservation
          </Button>
          <Button onClick={deleteReservation} color="secondary">
            Refuse Reservation
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserOperations;
