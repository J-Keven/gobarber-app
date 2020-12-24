import React, { useState, useCallback, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Hooks/Auth';
import ProviderProps from '../types/IProvider';
import apiClient from '../../service/apiClient';

import {
  Container,
  Header,
  GoBackButton,
  HeaderTitle,
  UserAvatar,
  ProviderListContainer,
  ProviderList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
} from './styles';

interface RouteParam {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const { providerId } = route.params as RouteParam;
  const navigation = useNavigation();

  const [providers, setProviders] = useState<ProviderProps[]>([]);
  const [providerSelected, setProviderSelected] = useState(providerId);

  const handleLoadProviders = useCallback(() => {
    apiClient.get<ProviderProps[]>('/providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const handleSelectProvider = useCallback((id: string) => {
    setProviderSelected(id);
  }, []);

  useEffect(handleLoadProviders, []);

  return (
    <Container>
      <Header>
        <GoBackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="chevron-left" size={22} color="#999591" />
        </GoBackButton>
        <HeaderTitle>Agendamentos</HeaderTitle>
        <UserAvatar
          source={{
            uri: user.avatar_url,
          }}
        />
      </Header>
      <ProviderListContainer>
        <ProviderList
          data={providers}
          horizontal
          keyExtractor={provider => provider.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: provider, index }) => (
            <ProviderContainer
              onPress={() => handleSelectProvider(provider.id)}
              selected={provider.id === providerSelected}
              style={
                index === providers.length - 1
                  ? {
                      marginRight: 40,
                    }
                  : {}
              }
            >
              <ProviderAvatar source={{ uri: provider.avatar_url }} />
              <ProviderName selected={provider.id === providerSelected}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProviderListContainer>
    </Container>
  );
};

export default CreateAppointment;
