import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './CheckOut.css'
const CheckOut = () => {
    return (
      <div className='modal-class'>
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Thanks For Your Choice Plan</Modal.Title>
      </Modal.Header>
    
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
      </div>
    );
};

export default CheckOut;