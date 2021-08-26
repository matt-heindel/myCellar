import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const More = ({ wine, description }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <img
              className="img"
              src={wine.img}
              alt={description}
            ></img>
            <div>
              This wine is the best that's ever been released.
              I remember the first time I tasted it was magical.
              I've never been more in love with anything in my life.
              There is nothing like a tall glass of this after a long day of coding.
            </div>
          </>
        </Modal.Body>
        <Modal.Footer className="footer">
        <p className="description">quantity: {wine.quantity}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default More;
