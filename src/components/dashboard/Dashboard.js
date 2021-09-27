import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { loadUser } from '../../actions/authAction'
import { connect } from 'react-redux';


const Dashboard = () => {
    useEffect(() => {
        console.log("useEffect Start");
        loadUser();
        console.log("useEffect End");
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            Dashboard
        </div>
    )
}

Dashboard.propTypes = {
    loadUser: PropTypes.func.isRequired,
}

export default connect(null, {loadUser})(Dashboard)
