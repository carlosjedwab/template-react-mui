import { useStore, UserStore } from 'app/data/local';
import React from 'react';

export interface LoginData {
  email: string;
  password: string;
}

interface UseLoginParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useLogin = (props?: UseLoginParams) => {
  const [, userActions] = useStore(UserStore);
  const [loginData, setLoginData] = React.useState<LoginData>({
    email: '',
    password: '',
  });
  UserStore;

  const setLoginField = (field: keyof LoginData, value: string) => {
    setLoginData({ ...loginData, [field]: value });
  };

  const login = () => {
    try {
      const userData = {
        id: 'id-1234',
        name: 'Carlos',
        email: loginData.email,
        token: 'TEST_TOKEN',
      };

      if (userData?.token) {
        userActions?.login?.(userData);
        props?.onSuccess?.();
      }
    } catch (error) {
      props?.onError?.(error as Error);
    }
  };

  return { loginData, setLoginField, login };
};
