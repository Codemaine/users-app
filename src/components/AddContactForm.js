import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addContact} from '../actions/contactsActions';
import { Form, Button } from 'react-bootstrap';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            phone_number: "",
            email: ""
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewContact(this.state)
        this.setState({
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
        }); 
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="John" name="first_name" 
                    value={this.state.first_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" name="last_name" 
                    value={this.state.last_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="0123456789" name="phone_number" 
                    value={this.state.phone_number} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="john.doe@gmail.com" name="email" 
                    value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Contact
                </Button>
            </Form>
        );
    }
}
const mapDispatchToProps = {
            addNewContact: addContact
}

export default connect(null, mapDispatchToProps)(AddContactForm);

