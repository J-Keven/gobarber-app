import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import { useAuth } from '../Hooks/Auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#f0f0f0" />
      </View>
    );
  }
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
