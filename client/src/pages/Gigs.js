import React from 'react';
import Signup from '../components/Signup';
import { Link } from 'react-router-dom';

const GIGS = () => {
    return (
        <div>
            <h1>Welcome, you filthy animal</h1>
            <Link to="/logout">Logout</Link>

        </div>
    )
};

export default GIGS;