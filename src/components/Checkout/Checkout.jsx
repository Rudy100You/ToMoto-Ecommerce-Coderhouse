import React, { useState } from 'react';
import { Button, Modal, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';

const ModalWrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 16,
});

const Checkout = (handleCloseStatusHandler) => {
  
  const [formData, setFormData] = useState({
    dni: '',
    email: '',
    phone: '',
    name: '',
  });

  const handleClose = () => {
    handleCloseStatusHandler();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalWrapper>
          <Typography variant="h6" gutterBottom id="modal-title">
            Compra
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="dni"
              label="DNI"
              value={formData.dni}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </ModalWrapper>
      </Modal>
    </div>
  );
};

export default Checkout;