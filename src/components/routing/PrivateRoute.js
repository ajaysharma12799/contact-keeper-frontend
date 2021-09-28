import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
	return (
		<Route
            {...rest}
            render={(props) =>
                auth.isAuthenticated === null ? 
                (<Redirect to="/Signin" />)
                    : 
                (<Component {...props} />) 
            }
        />
	);
};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProp = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProp)(PrivateRoute)
