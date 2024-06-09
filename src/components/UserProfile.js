import React from 'react';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const handleButtonClick = () => {
    setIsOnline((prevIsOnline) => !prevIsOnline);
  };

  return (
    <div>
      <p>{isOnline ? 'en ligne' : 'hors ligne'}</p>
      <button onClick={handleButtonClick}>Toggle Status</button>
    </div>
  );
}

export default UserProfile;
