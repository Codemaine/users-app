import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';
import {connect} from 'react-redux';
import {logout} from '../src/actions/authActions';
import { NavLink } from 'react-router-dom'
 
class App extends Component {
  render() {
    return (
      <>
       <ul className="nav p-2 justify-content-between">
                <div className="d-flex">
  <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Signup">SignUp</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Login">Login</NavLink>
  </li>
  </div>
  <li className="nav-item">
      <button className="nav-link btn btn-primary" onClick={() => this.props.logout()}>Logout</button>
  </li>
</ul>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <h3>Add Contacts</h3>
              <AddContactForm />
            </Col>
            <Col>
            <h3>All Contacts</h3>
            <br />
              <Contacts  
              // contactsData={this.state.contacts}
               deleteContact={this.deleteContact} 
              editContact={this.editContact} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  logout: logout
}

export default connect(null, mapDispatchToProps)(App);

