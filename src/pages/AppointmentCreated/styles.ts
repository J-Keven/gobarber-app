import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 30px;
  color: #f4ede8;
  text-align: center;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #999591;
  margin-bottom: 40px;
`;

export const OkButtom = styled(RectButton)`
  width: 100px;
  height: 50px;

  background-color: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const OkButtomText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #312e38;
`;
