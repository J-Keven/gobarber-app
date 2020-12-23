import React, { useCallback, useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Hooks/Auth';
import ProvidersProps from './types';
import api from '../../service/apiClient';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProviderListHeader,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderAvailableTime,
  ProviderAvailableText,
  ProvaidersList,
} from './styles';

const Dashbaord: React.FC = () => {
  const [providers, setProviers] = useState<ProvidersProps[]>([]);
  const { sigOut, user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    api.get<ProvidersProps[]>('providers').then(response => {
      setProviers(response.data);
    });
  }, []);

  const handleNavigateToCreateAppointment = useCallback(providerId => {
    navigation.navigate('CreateAppointment', { providerId });
  }, []);
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
            sigOut();
          }}
        >
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
      <ProvaidersList
        data={providers}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ProviderListHeader>Cabeleireiros</ProviderListHeader>
        }
        keyExtractor={provider => provider.id}
        renderItem={({ item: provider, index }) => (
          <ProviderContainer
            style={index === providers.length - 1 ? { marginBottom: 50 } : {}}
            onPress={() => {
              handleNavigateToCreateAppointment(provider.id);
            }}
          >
            <ProviderAvatar
              source={{
                uri: provider.avatar_url,
              }}
            />
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
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
        )}
      />
    </Container>
  );
};

export default Dashbaord;
