import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import ProvidersProps from '../types/IProvider';

interface ProviderContainerProps {
  selected: boolean;
}

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

export const GoBackButton = styled.TouchableOpacity`
  margin-right: 10px;
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
  margin-left: auto;
`;

export const ProviderListContainer = styled.View``;

export const ProviderList = styled(
  FlatList as new () => FlatList<ProvidersProps>,
)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  width: 200px;
  height: 60px;
  margin-right: 16px;
  padding: 8px 12px;
  background-color: #3e3b47;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${props =>
    props.selected &&
    css`
      background-color: #ff9900;
    `}
`;
export const ProviderAvatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 10px;
`;

export const ProviderName = styled.Text<ProviderContainerProps>`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;

  ${props =>
    props.selected &&
    css`
      color: #232129;
    `}
`;
