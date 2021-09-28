import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { updateContact } from '../../actions/contactAction';

const UpdateContactForm = ({updateContact}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("Personal");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, email, phone, type});
        updateContact({name, email, phone, type});
        alert("Contact Updated Successfully");
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
            <button type="submit" onClick={e => handleSubmit(e)} className="btn btn-primary w-100">Update Contact</button>
        </form>
    )
}

UpdateContactForm.propTypes = {
    updateContact: PropTypes.func.isRequired,
}

export default connect(null, {updateContact})(UpdateContactForm)
