import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/contactImage.svg";

const Home = () => {
    return (
        <div className="container home-container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-6 contact-image-section">
                    <img src={Logo} alt="Contact" className="contact-image" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 text-uppercase contact-text-section">
                    <h4 className="display-5 lead text-center">
                        Contact Manager
                    </h4>
                    <p className="lead text-center">
                        Keep Your Contacts Safe and in One Place
                    </p>
                    <div className="d-flex justify-content-between flex-column">
                        <Link to="/Signin" className="btn btn-success btn-lg w-100 mb-2">signin</Link>
                        <Link to="/Signup" className="btn btn-primary btn-lg w-100 mt-2">signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
