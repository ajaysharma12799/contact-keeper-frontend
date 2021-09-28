import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';

const Navbar = ({title, logout, auth: {isAuthenticated, user}}) => {
    const [clicked, setClicked] = useState(false);
    let history = useHistory();

    const handleLogout = () => {
        logout();
    }
    const AuthLink = (
        <Fragment>
            <li className="nav-item">
                <h4 className="lead fs-3 text-white pe-5">Hello {user && user.name}</h4>
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
                <Link className="nav-link text-white" to="/Signin">Signin</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/Signup">Signup</Link>
            </li>
        </Fragment>
    );
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to={isAuthenticated ? "/Dashboard" : "/"}>{title}</Link>
                <button onClick={() => setClicked(!clicked)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {
                        !clicked ? <span className="fas fa-bars"></span> : <span className="fas fa-times"></span>
                    }
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

