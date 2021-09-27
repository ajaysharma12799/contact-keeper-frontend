import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';


const Signin = ({loginUser}) => {
    let history = useHistory();
    const [email, setEmail] = useState("a@gmail.com");
    const [password, setPassword] = useState("123456");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({email, password})
        loginUser({email, password});
        history.push("/Dashboard");
        alert("User LoggedIn Successfully");
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
}

export default connect(null, {loginUser})(Signin)

// {"token":null,"isAuthenticated":false,"user":null,"loading":false}