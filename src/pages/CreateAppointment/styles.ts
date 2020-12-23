import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: #28262e;
`;
export const GoBackIcon = styled(Feather)`
  color: #999591;
`;
export const HeaderTitle = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 20px;
  line-height: 28px;

  color: #f4ede8;
`;
export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;
