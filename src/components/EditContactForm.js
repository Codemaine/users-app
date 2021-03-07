import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {editContact} from '../actions/contactsActions';

class EditContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: props.contactInfo.first_name,
            middle_name: props.contactInfo.middle_name,
            last_name: props.contactInfo.last_name,
            phone_number: props.contactInfo.phone_number,
            address: props.contactInfo.address,
            email: props.contactInfo.email,
            type: props.contactInfo.type,
            id: props.contactInfo.id,
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updatedContact(this.state)
        this.setState({
            first_name: "",
            middle_name: "",
            last_name: "",
            phone_number: "",
            address: "",
            email: "",
            type: "",
        });
        this.props.closeModal();
         
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>first_name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="first_name" 
                    value={this.state.first_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>middle_name</Form.Label>
                    <Form.Control type="middle_name" placeholder="Enter middle_name" name="middle_name" 
                    value={this.state.middle_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>last_name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last_name" name="last_name" 
                    value={this.state.last_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>phone_number</Form.Label>
                    <Form.Control type="number" placeholder="phone_number" name="phone_number" 
                    value={this.state.phone_number} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>address</Form.Label>
                    <Form.Control type="text-area" placeholder="Enter address" name="address" 
                    value={this.state.address} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" 
                    value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>type</Form.Label>
                    <Form.Control type="type" placeholder="Enter type" name="type" 
                    value={this.state.type} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit Contact
                </Button>
            </Form>
        );
    }
}
const mapDispatchToProps = {
    updatedContact: editContact
}

export default connect(null, mapDispatchToProps) (EditContactForm);


