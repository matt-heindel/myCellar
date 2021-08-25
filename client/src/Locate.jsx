import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { getLocationGrid } from '../helper/functions';

const Locate = ({ rack, position }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const positions = getLocationGrid(position);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Locate
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{rack} - {position}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="locate-grid">
            {positions.map((pos) => {
              if (pos === 0) {
                return (
                  <div className="spot-empty"></div>
                );
              } else {
                return (
                  <div className="spot-full">{position}</div>
                );
              }
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Locate;
