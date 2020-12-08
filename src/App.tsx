import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import Providers from './Hooks';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#28262e" />
      <Providers>
        <View style={{ flex: 1, backgroundColor: '#312E38' }}>
          <Routes />
        </View>
      </Providers>
    </NavigationContainer>
  );
};

export default App;
