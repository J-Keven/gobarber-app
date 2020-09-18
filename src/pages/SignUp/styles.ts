import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Conainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 50}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #f4ede8;
  margin: 64px 0 24px 0;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #232129;
  /* opacity: 0; */
`;

export const GoBackButtonText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 10px;
`;
