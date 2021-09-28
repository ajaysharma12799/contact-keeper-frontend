import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import ContactForm from '../contact/ContactForm';
import { getAllContacts } from '../../actions/contactAction';
import ContactItem from '../contact/ContactItem';
import Spinner from '../layout/Spinner';
import { loadUser } from '../../actions/authAction';


const Dashboard = ({getAllContacts, contact: {contacts, loading}}) => {

    useEffect(() => {
        loadUser()
        getContacts();
        // eslint-disable-next-line
    }, []);

    const getContacts = async () => {
        setTimeout(() => {
            getAllContacts()
        }, 2000);
    }

    if(contacts !== null && contacts.length === 0 && ! loading) {
        return <h1>Please Add Contacts</h1>
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <ContactForm />
                </div>
                <div className="col-md-6 mt-5">
                    {
                        contacts !== null && !loading ? (
                            contacts.map(contact => <ContactItem key={contact._id} contact={contact} />)
                        ) : (<Spinner />)
                    }
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    getAllContacts: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
}

const mapStateToProp = (state) => ({
    contact: state.contact
});

export default connect(mapStateToProp, {getAllContacts})(Dashboard)
