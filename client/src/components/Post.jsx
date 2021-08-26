import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Post = ({ handlePost }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    handleClose();
    handlePost();
  }

  return (
    <>
      <Button variant="primary" id="add-wine" onClick={handleShow}>
        Add a wine
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add to myWines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Brand">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control type="text" placeholder="Beringer" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Varietal">
              <Form.Label>Varietal</Form.Label>
              <Form.Control type="text" placeholder="Cabernet Sauvignon" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Vintage">
              <Form.Label>Vintage</Form.Label>
              <Form.Control type="text" placeholder="2017" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Region">
              <Form.Label>Region</Form.Label>
              <Form.Control type="text" placeholder="Napa Valley" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Fanciful">
              <Form.Label>Fanciful Name</Form.Label>
              <Form.Control type="text" placeholder="Reserve" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="footer">
          <Button variant="secondary" onClick={handleAdd}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post;
