import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import  {signup}  from "../actions/authActions";
import { NavLink } from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props);
    this.state = {
        username: "",
        email: "",
        password: "",
    }
}
handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value, 
      });
};
handleSubmit = (e) => {
    e.preventDefault();
    this.props.Signup(this.state);
    this.setState({
         username: "",
        email: "",
        password: "",
    })
}
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
</ul>
            <div style={{width: "50%", margin: "auto", marginTop: "50px"}}>
                 
                <h1>SignUp</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" required placeholder="john@123" name="username"
                            value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required placeholder="john.doe@gmail.com" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required placeholder="........" name="password"
                            value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="Signup">
                        Create Contact
                </Button>
                </Form>
            </div>
            </>
        );
    }
}
const mapDispatchToProps = { 
     Signup: signup

}

export default connect(null, mapDispatchToProps)(Signup);
