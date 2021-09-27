import React, {useState} from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Signup = ({registerUser}) => {
    let history = useHistory();
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
            history.push("/Dashboard");
            console.log("Push End");
        }
        else {
            alert("Password Do Not Match");
        }
    }  

    return (
        <form className="container mt-5">
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
}

export default connect(null, {registerUser})(Signup)