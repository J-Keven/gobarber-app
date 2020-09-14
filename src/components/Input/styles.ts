import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  padding: 0 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #f4ede8;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
