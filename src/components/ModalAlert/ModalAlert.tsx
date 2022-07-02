import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

interface IPropsModalAlert {
  show: boolean;
  handleShow: (toggle: boolean) => void;
  title: string;
  body: string;
  button: string;
  variant: string;
}
const ModalAlert = (props: IPropsModalAlert) => {
  const { show, handleShow, title, body, button, variant } = props;
  return (
    <>
      <Modal show={show} onHide={() => handleShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant={variant} onClick={() => handleShow(false)}>
            {button}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAlert;
