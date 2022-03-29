import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const CoverPage = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h1>Cover Page for anonymous users</h1>

      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleClickSignup}>Signup</button>
    </div>
  );
};

export default CoverPage;
