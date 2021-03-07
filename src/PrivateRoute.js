import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                auth.isLoaded && !auth.isEmpty ? (
                    <Component {...props} />
                ) : 
                    <Redirect 
                        to={{pathname: "login", state: { from: props.loaction } }}
                    />
                }
            
        />
    );
};
       
const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
})

export default connect(mapStateToProps)(PrivateRoute);
