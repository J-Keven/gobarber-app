import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../Pages/SignIn';

const Auth = createStackNavigator();
const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Auth.Screen name="Signin" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
