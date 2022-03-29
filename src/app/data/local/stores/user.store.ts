import { Store, LocalDataSource } from 'app/data/local';

export interface UserData {
  id: any;
  name: string;
  email: string;
  token: string;
}

interface UserActions {
  login: (userData: UserData) => void;
  logout: () => void;
}

interface UserState {
  user?: UserData;
  logged?: boolean;
}

const LOCAL_STORAGE_USER_DATA = 'sessionStore-userData';

export const UserStore: Store<UserState, UserActions> = (store) => {
  LocalDataSource.get<UserData>(LOCAL_STORAGE_USER_DATA).then((userDS) => {
    store.setState({ user: userDS, logged: !!userDS });
  });

  const logout = () => {
    store.setState({ user: {} as any, logged: false });
    LocalDataSource.remove(LOCAL_STORAGE_USER_DATA);
  };

  const login = (userData: UserData): Promise<UserData> => {
    store.setState({ user: userData, logged: true });
    return LocalDataSource.set<UserData>(LOCAL_STORAGE_USER_DATA, userData);
  };

  return { login, logout };
};
