import React from 'react'
import { Modal, Button, Alert } from 'react-bootstrap'

const DeleteConfirmation = (props) => {
    const {showModal, confirmModal, hideModal, id, userName} = props;
    return (
        <Modal show={showModal} onHide={hideModal} animation>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant={'danger'}>
                    {`Do you want to delete ${userName} ? If yes then click on the yes button otherwise click on close button.`}
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => confirmModal(id)}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteConfirmation
