import React from 'react';
import './App.css';
import { AppProvider } from './AppContext';
import UserProfile from './UserProfile';

function App() {
    return (
        <AppProvider>
            <div className='App'>
                <h1>Context API Example</h1>
                <UserProfile />
            </div>
        </AppProvider>
    );
}

export default App;
