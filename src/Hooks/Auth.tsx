import React, { useContext, createContext, useState, useEffect } from 'react';
import asyncStorage from '@react-native-community/async-storage';
import apiClient from '../service/apiClient';

interface CredentialsProps {
  email: string;
  password: string;
}
interface UserProps {
  name: string;
  email: string;
  id: string;
  avatar_url: string;
}
interface AuthContextProps {
  user: UserProps;
  loading: boolean;
  sigIn({ email, password }: CredentialsProps): void;
  sigOut(): void;
}

interface UserStatet {
  user: UserProps;
  token: string;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvide: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserStatet>({} as UserStatet);
  const [loading, setLoading] = useState(true);
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
    setUserData({} as UserStatet);

    await asyncStorage.multiRemove(['@gobarber:token', '@gobarber:user']);
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

      setLoading(false);
    }

    handleLoadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: userData.user, loading, sigIn, sigOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}
export { AuthProvide, useAuth };
