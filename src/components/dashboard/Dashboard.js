import React, {useEffect} from 'react'
import ContactForm from '../contact/ContactForm';
import { loadUser } from '../../actions/authAction';
import Contacts from '../contact/Contacts';

const Dashboard = () => {

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <ContactForm />
                </div>
                <div className="col-md-6 mt-5">
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
