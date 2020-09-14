import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312E38" />
      <View style={{ flex: 1, backgroundColor: '#312E38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
