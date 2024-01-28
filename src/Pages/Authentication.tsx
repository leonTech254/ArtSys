// src/pages/Authentiction.tsx
import React, { useState } from 'react';
import RegistrationComponent from '../Components/RegistrationComponent';
import LoginComponent from '../Components/LogIn';

let isLogin=false;

const Authentiction: React.FC = () => {
  const [isLogin, setMessage] = useState<boolean>(false);

  const handleLoginButtonClick = () => {
    // Update the message when the login button is clicked
    setMessage(true);
  };

  const handeToLoginBtn=()=>{
    setMessage(false);
  }


  return (
    <div>
      {isLogin}
      {isLogin ? (
        <>
          <RegistrationComponent onLoginButtonClick={handeToLoginBtn} />
        </>
      ) : (
        <>          
          <LoginComponent onRegisterButtonClick={handleLoginButtonClick}/>
        </>
      )}
    </div>
  );
};

export default Authentiction;
