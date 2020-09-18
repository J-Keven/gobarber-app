import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 50}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 26px;
  color: #f4ede8;
  margin: 64px 0 24px 0;
`;

export const ForgetPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgetPasswordText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
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

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 10px;
`;
