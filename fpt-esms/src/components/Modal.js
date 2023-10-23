import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sing Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You have successfully registered, please check your email to
                    receive your username and password, thank you.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function Example_Save() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Save
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>Save your chanes to file? </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Don't Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
