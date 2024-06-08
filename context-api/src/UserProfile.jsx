import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const UserProfile = () => {
    const { user, setUser } = useContext(AppContext);

    const toggleLogin = () => {
        setUser(prevUser => ({ ...prevUser, loggedIn: !prevUser.loggedIn }));
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Status: {user.loggedIn ? 'Logged In' : 'Logged Out'}</p>
            <button onClick={toggleLogin}>
                {user.loggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
};

export default UserProfile;
