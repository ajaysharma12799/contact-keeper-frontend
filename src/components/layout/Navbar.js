import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';

const Navbar = ({title, logout, auth: {isAuthenticated, user}}) => {
    let history = useHistory();
    const handleLogout = () => {
        logout();
    }
    const AuthLink = (
        <Fragment>
            <li className="nav-item">
                <h1 className="display-5">Hello {user && user.name}</h1>
            </li>
            <li className="nav-item">
                <button className="btn btn-danger" onClick={() => {
                    handleLogout();
                    history.push("/");
                }} >Signout</button>
            </li>
        </Fragment>
    );
    const GuestLink = (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/Signin">Signin</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Signup">Signup</Link>
            </li>
        </Fragment>
    );
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to={isAuthenticated ? "/Dashboard" : "/"}>{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {isAuthenticated ? AuthLink : GuestLink}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

Navbar.defaultProps = {
    title: "Contact Manager",
}

const mapStateToProp = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProp, {logout})(Navbar)

