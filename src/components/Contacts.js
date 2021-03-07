import React from 'react';
import {compose} from 'redux';
import { Container, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import Contact from './Contact';
import { firestoreConnect } from 'react-redux-firebase';

const Contacts = (props) => {
    let displayInfo;
    if (props.requesting) {
        displayInfo = <p>Loading...</p>
    } else if (props.requested && props.contacts.length === 0) {
        displayInfo = <p>No contacts found</p>
    } else if (props.requested && props.contacts.length > 0) {
        displayInfo = props.contacts.map((contact) => {
            return(
                <Contact contactInfo={contact} key={contact.id} editContact={props.editContact} />
            );
        })
    }
    return(
        <Container>
            <Row>
                {displayInfo}
            </Row>
        </Container>
    );
};

const mapStateToProps =(state) => ({
    contactsData: state.contactsState.contacts,
    contacts:state.firestore.ordered.contact,
    requesting: state.firestore.status.requesting.contact,
    requested:state.firestore.status.requested.contact,
})
export default compose(connect(mapStateToProps), firestoreConnect(["contact"]))(Contacts);