import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getAllContacts } from '../../actions/contactAction';
import ContactItem from '../contact/ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = ({getAllContacts, contact: {contacts, loading}}) => {

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    const getContacts = async () => {
        setTimeout(() => {
            getAllContacts()
        }, 2000);
    }

    if(contacts !== null && contacts.length === 0 && ! loading) {
        return <h1 className="display-5 text-center lead">Please Add Contacts</h1>
    }

    return (
        <div>
        {
            contacts !== null && !loading ? (
                contacts.map(contact => <ContactItem key={contact._id} contact={contact} />)
            ) : (<Spinner />)
        }
        </div>
    )
}

Contacts.propTypes = {
    getAllContacts: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
}

const mapStateToProp = (state) => ({
    contact: state.contact
});

export default connect(mapStateToProp, {getAllContacts})(Contacts)
