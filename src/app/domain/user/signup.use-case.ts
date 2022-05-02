import { useStore, UserStore } from 'app/data/local';
import React from 'react';

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface UseSignupParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useSignup = (props?: UseSignupParams) => {
  const [, userActions] = useStore(UserStore);
  const [signupData, setSignupData] = React.useState<SignupData>({
    name: '',
    email: '',
    password: '',
  });

  const setSignupField = (field: keyof SignupData, value: string) => {
    setSignupData({ ...signupData, [field]: value });
  };

  const signup = () => {
    try {
      const userData = {
        id: 'id-1234',
        name: signupData.name,
        email: signupData.email,
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

  return { signupData, setSignupField, signup };
};
