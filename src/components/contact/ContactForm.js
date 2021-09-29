import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addContact, updateContact } from '../../actions/contactAction';
import { setAlert } from '../../actions/AlertAction';

const ContactForm = ({setAlert, addContact, updateContact, contact: {current}}) => {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("Personal");


    useEffect(() => {
        if(current !== null) {
            setName(current.name);
            setEmail(current.email);
            setPhone(current.phone);
            setType(current.type);
            setID(current._id);
        }
        else {
            setName("");
            setEmail("");
            setPhone("");
            setType("");
            setID("");
        }
    }, [current]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(current === null) {
            addContact({name, email, phone, type});
            setAlert("Contact Added Successfully", "success");
            setName("");
            setEmail("");
            setPhone("");
            setType("");
            setID("");
        }
        else {
            updateContact({name, email, phone, type, id});
            setAlert("Contact Updated Successfully", "success");
            setName("");
            setEmail("");
            setPhone("");
            setType("");
            setID("");
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
                <input value={phone} onChange={e => setPhone(e.target.value)} type="text" className="form-control" placeholder="Enter Contact Number" />
            </div>
            <div className="mb-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="personal" 
                    checked={type === 'Personal'}
                    value="Personal" onChange={e => setType(e.target.value)} />
                    <label className="form-check-label" htmlFor="personal">Personal</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="professional" 
                    checked={type === 'Professional'} 
                    value="Professional" onChange={e => setType(e.target.value)} />
                    <label className="form-check-label" htmlFor="professional">Professional</label>
                </div>
            </div>
            <button type="submit" onClick={e => handleSubmit(e)} className="btn btn-primary w-100">
                {current === null ? "Add Contact" : "Update Contact"}
            </button>
        </form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    setAlert: PropTypes.func.isRequired,
}

const mapStateToProp = (state) => ({
    contact: state.contact
})

export default connect(mapStateToProp, {setAlert, addContact, updateContact})(ContactForm)
