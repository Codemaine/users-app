import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authActions';
import {Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom'



class Login extends Component {
    constructor(props) {
        super(props);
    this.state = {
        
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
    this.props.login(this.state)
}
    render() {
        if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {
            return <Redirect to="/" />;
        }
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
                <h1>Login</h1>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>on
                        <Form.Control type="email" required placeholder="john.doe@gmail.com" name="email"
                            value={this.state.email} onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>password</Form.Label>
                        <Form.Control required type="password" placeholder="........" name="password"
                            value={this.state.password} onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <p className="text-danger"></p>
                    <Button variant="primary" type="Login">
                        Login
                </Button>
                </Form>
            </div>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
})
const mapDispatchToProps = {
    login: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

