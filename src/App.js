import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import React, { useState } from 'react';
import UserContext from './contexts/UserContext'

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      <div className="App">
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
