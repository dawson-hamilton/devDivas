import React from 'react';
import Signup from '../components/Signup';
import { Link } from 'react-router-dom';

const HOME = () => {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>

        </div>
    )
};

export default HOME;