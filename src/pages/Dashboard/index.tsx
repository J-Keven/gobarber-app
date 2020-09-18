import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../Hooks/Auth';

const Dashbaord: React.FC = () => {
  const { sigOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={sigOut}>
        Sair
      </Button>
    </View>
  );
};

export default Dashbaord;
