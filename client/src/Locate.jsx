import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { getLocationGrid } from '../helper/functions';

const Locate = ({ rack, positions }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const positionsArray = getLocationGrid(positions);

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
          <Modal.Title>{rack} - {positions}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="locate-grid">
            {positionsArray.map((pos, i) => {
              if (pos === 0) {
                return (
                  <div key={i} className="spot-empty"></div>
                );
              } else {
                return (
                  <div key={i} className="spot-full">{pos}</div>
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
