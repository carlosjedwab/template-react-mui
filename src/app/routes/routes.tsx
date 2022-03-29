import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useStore, UserStore } from 'app/data/local';
import { AppPaths } from './paths';

const CoverPage = React.lazy(() => import('app/modules/cover/cover.page'));
const LoginPage = React.lazy(() => import('app/modules/account/login.page'));
const SignupPage = React.lazy(() => import('app/modules/account/signup.page'));
const HomePage = React.lazy(() => import('app/modules/home/home.page'));

const MissingRoute = () => {
  return <Navigate to={{ pathname: '/' }} />;
};

export const AppRoutes: React.FC = () => {
  const [userState] = useStore(UserStore);

  return (
    <React.Suspense fallback={<div />}>
      <Routes>
        <Route path={'*'} element={<MissingRoute />} />
        {!userState.logged ? (
          <>
            <Route index element={<CoverPage />} />
            <Route path={AppPaths.LoginPage.Base} element={<LoginPage />} />
            <Route path={AppPaths.SignupPage.Base} element={<SignupPage />} />
          </>
        ) : (
          <>
            <Route index element={<HomePage />} />
          </>
        )}
      </Routes>
    </React.Suspense>
  );
};
