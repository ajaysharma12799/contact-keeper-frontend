import React, {useState} from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Signup = ({registerUser, auth}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password === confirmPassword) {
            console.log({name, email, password})
            registerUser({name, email, password});
            alert("User Added Successfully");
            console.log("Push End");
        }
        else {
            alert("Password Do Not Match");
        }
    }  

    if(auth.isAuthenticated) {
        return <Redirect to="/Dashboard" />
    }

    return (
        <form className="container mt-5">
            <div className="mb-3">
                <h4 className="display-5 lead text-center text-uppercase">Signup</h4>
                <p className="lead text-center text-uppercase">
                    Your Information is Secured with us
                </p>
            </div>
            <div className="mb-3">
                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Enter Name" />
            </div>
            <div className="mb-3">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <div className="mb-3">
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Confirmation Password" />
            </div>
            <button type="submit" onClick={e => handleSubmit(e)} className="btn btn-primary w-100">Signup</button>
        </form>
    )
}

Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProp = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProp, {registerUser})(Signup)
