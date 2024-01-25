import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import "./feed.css"
interface FeedbackDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (content: string, clientId: number) => void;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({ open, onClose, onSubmit }) => {
  const [content, setContent] = useState('');
  const [clientId, setClientId] = useState<number>(() => {
    const storedClientId = localStorage.getItem('id');
    return storedClientId ? parseInt(storedClientId, 10) : 1;
  });
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleClientIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientId(Number(event.target.value));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/feedback', {
        content,
        client_id: clientId,
      });
        console.log('Server response:', response.data);
        onClose();
        window.location.reload();
  
    } catch (error) {
      console.error('Error posting feedback:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Post Feedback</DialogTitle>
      <DialogContent>
        <TextField
          label="Give Us Some Feedback And Dont Forget To Be Nice :)"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={content}
          onChange={handleContentChange}
          margin="normal"
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface FeedbackFormProps {
  onSubmit: (content: string, clientId: number) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className='add' variant="outlined" color="primary" onClick={handleOpen}>
        Send FeedBack
      </Button>
      <FeedbackDialog open={open} onClose={handleClose} onSubmit={onSubmit} />
    </div>
  );
};

export default FeedbackForm;
