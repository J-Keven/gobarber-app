import React, { useContext, createContext, useState, useEffect } from 'react';
import asyncStorage from '@react-native-community/async-storage';
import apiClient from '../service/apiClient';

interface CredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: object;
  sigIn({ email, password }: CredentialsProps): void;
  sigOut(): void;
}

interface UserStatet {
  user: object;
  token: string;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvide: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserStatet>({} as UserStatet);
  async function sigIn({ email, password }: CredentialsProps) {
    const { data } = await apiClient.post('login', {
      email,
      password,
    });

    await asyncStorage.multiSet([
      ['@gobarber:token', data.token],
      ['@gobarber:user', JSON.stringify(data.user)],
    ]);

    setUserData({
      user: data.user,
      token: data.token,
    });
  }
  async function sigOut() {
    await asyncStorage.multiRemove(['@gobarber:token', '@gobarber:user']);

    setUserData({} as UserStatet);
  }

  useEffect(() => {
    async function handleLoadStorageData() {
      const [token, user] = await asyncStorage.multiGet([
        '@gobarber:token',
        '@gobarber:user',
      ]);
      if (token[1] && user[1]) {
        setUserData({
          token: token[1],
          user: JSON.parse(user[1]),
        });
      }
    }

    handleLoadStorageData();
  }, []);
  return (
    <AuthContext.Provider value={{ user: userData.user, sigIn, sigOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}
export { AuthProvide, useAuth };
