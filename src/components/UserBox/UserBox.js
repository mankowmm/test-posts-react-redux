import React from 'react';
import './UserBox.css';

export const UserBox = ({isAuthenticated, authenticatedUserName, logoutAction}) => {

    console.log('isAuthenticated:', isAuthenticated);

    return (
        <div className="UserBox">
            <button className="btn" onClick={logoutAction}>Logout</button>
        
        </div>
    )
}
