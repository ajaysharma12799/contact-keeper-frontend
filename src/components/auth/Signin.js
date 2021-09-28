import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';

const Signin = ({loginUser, auth}) => {
    const [email, setEmail] = useState("a@gmail.com");
    const [password, setPassword] = useState("123456");

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser({email, password});
        console.log(auth.isAuthenticated);
        alert("User LoggedIn Successfully");
    }

    if(auth.isAuthenticated) {
        return <Redirect to="/Dashboard" />
    }

    return (
        <form className="container mt-5">
            <div className="mb-3">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <button type="submit" onClick={e => handleSubmit(e)} className="btn btn-primary w-100">Signin</button>
        </form>
    )
}

Signin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProp = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProp, {loginUser})(Signin)
