import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { clearCurrent, deleteContact, setCurrent } from '../../actions/contactAction';
import { setAlert } from '../../actions/AlertAction';

const ContactItem = ({setAlert, contact, deleteContact, clearCurrent, setCurrent}) => {
    const {name, email, phone, type, _id} = contact
    return (
        <div className={type === "Professional" ? "card mb-2 bg-warning " : "card mb-2 bg-primary"}>
            <div className={type === "Professional" ? "card-body text-dark" : "card-body text-white"}>
                <h4 className="card-title lead">
                    <span className="pe-2"><i className="fas fa-user-circle"></i></span><span>{name}</span>
                </h4>
                <h4 className="card-title lead">
                    <span className="pe-2"><i className="far fa-envelope-open"></i></span><span>{email}</span>
                </h4>
                <h4 className="card-title lead">
                    <span className="pe-2"><i className="fas fa-phone-square-alt"></i></span><span>{phone}</span>
                </h4>
                <span className={type === "Professional" ? "badge bg-success btn btn-success" : "badge btn btn-warning"}>{type}</span>
            </div>
            <div className="card-body d-flex justify-content-between">
                <button className="btn btn-dark btn-lg" onClick={() => {
                    console.log("clicked")
                    setCurrent(contact);
                }}>Edit</button>
                <button className="btn btn-danger btn-lg" onClick={() => { 
                    deleteContact(_id);
                    clearCurrent();
                    setAlert("Contact Deleted Successfully", "success");
                }}>Delete</button>
            </div>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, {setAlert, deleteContact, clearCurrent, setCurrent})(ContactItem)
