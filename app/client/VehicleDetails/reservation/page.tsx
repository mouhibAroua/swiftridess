import React, { useState } from 'react';

const ReservationForm: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [vehicleId, setVehicleId] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/company/reservation/${userId}/${vehicleId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Reservation created successfully:', data);
    } catch (error) {
      console.error('Error creating reservation:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <br />
      <label>
        <input type="text" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} />
      </label>
      <br />
    </form>
  );
};

export default ReservationForm;
