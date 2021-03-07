import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import EditContactForm from './EditContactForm';
import {connect} from 'react-redux';
import {deleteContact} from '../actions/contactsActions';

const Contact = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = (e) => {
        e.preventDefault();
        props.removeContact(props.contactInfo.id);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContactForm  contactInfo={props.contactInfo}  
                    closeModal={handleClose}/>
                </Modal.Body>
            </Modal>

            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            Contact Name
                    </Card.Subtitle>
                        <Card.Title>{ props.contactInfo.first_name } {props.contactInfo.middle_name} {props.contactInfo.last_name}
                        </Card.Title>
                        <Card.Text>
                            <p>Phone_number: {props.contactInfo.phone_number} </p>
                            <p>Address: {props.contactInfo.address} </p>
                            <p>Email: {props.contactInfo.email} </p>
                            <p>Type: {props.contactInfo.type} </p>
                        </Card.Text>
                        <Card.Link href="#" onClick={handleShow}>EditContact</Card.Link>
                        <Card.Link href="#">
                            <Button variant="danger" size="sm" onClick={handleDelete} >DeleteContact</Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

const mapDispatchToProps = {
    removeContact: deleteContact
}
export default connect(null, mapDispatchToProps)(Contact);
