import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import ProvidersProps from './types';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #28262e;
`;
export const HeaderTitle = styled.Text`
  font-size: 20px;
  line-height: 28px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;
export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;
export const ProfileButton = styled.TouchableOpacity`
  border-width: 0;
`;
export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

// eslint-disable-next-line prettier/prettier
export const ProvaidersList = styled( FlatList as new () => FlatList<ProvidersProps> )`
  padding: 32px 24px;
`;

export const ProviderListHeader = styled.Text`
  color: #f4ede8;
  font-size: 25px;
  line-height: 33px;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 24px;
`;

export const ProviderContainer = styled(RectButton)`
  flex-direction: row;
  margin-bottom: 16px;
  padding: 20px 16px;
  background: #3e3b47;
  border-radius: 10px;
`;
export const ProviderAvatar = styled.Image`
  width: 78px;
  height: 78px;
  border-radius: 39px;
`;
export const ProviderInfo = styled.View`
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  line-height: 24px;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 6px;
`;
export const ProviderAvailableTime = styled.View`
  flex-direction: row;
`;
export const ProviderAvailableText = styled.Text`
  margin-top: 6px;
  margin-left: 11px;
  color: #999591;
  font-size: 15px;
  line-height: 16px;
  font-family: 'RobotoSlab-Regular';
`;
