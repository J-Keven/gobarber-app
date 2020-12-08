import React from 'react';
import { Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useAuth } from '../../Hooks/Auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  Content,
  ContentTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderAvailableTime,
  ProviderAvailableText,
} from './styles';

const Dashbaord: React.FC = () => {
  const { sigOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ProfileButton
          onPress={() => {
            // Navigate to profile
          }}
        >
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
      <Content>
        <ContentTitle>Cabeleireiros</ContentTitle>

        <ProviderContainer>
          <ProviderAvatar
            source={{
              uri:
                'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
            }}
          />
          <ProviderInfo>
            <ProviderName>Jheyson</ProviderName>
            <ProviderAvailableTime>
              <Feather name="calendar" size={22} color="#FF9000" />
              <ProviderAvailableText>Segunda à sexta</ProviderAvailableText>
            </ProviderAvailableTime>
            <ProviderAvailableTime>
              <Feather name="clock" size={22} color="#FF9000" />
              <ProviderAvailableText>8h às 18h</ProviderAvailableText>
            </ProviderAvailableTime>
          </ProviderInfo>
        </ProviderContainer>
      </Content>
    </Container>
  );
};

export default Dashbaord;
