import * as React from 'react';
import { useStore, UserStore } from 'app/data/local';

const HomePage = () => {
  const [, userActions] = useStore(UserStore);

  const handleLogout = () => {
    userActions?.logout?.();
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
