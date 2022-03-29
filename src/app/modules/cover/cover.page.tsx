import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from 'app/routes/paths';

const CoverPage = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(AppPaths.LoginPage.Base);
  };

  const handleClickSignup = () => {
    navigate(AppPaths.SignupPage.Base);
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
