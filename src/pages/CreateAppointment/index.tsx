import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import DateTimePiker from '@react-native-community/datetimepicker';
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
  Calendar,
  CalendarTitle,
  ShowCalendarButton,
  ShowCalendarButtonText,
  Schedule,
  ScheduleTitle,
  HoursListContainer,
  HoursList,
  HoursListTitle,
  HourContainer,
  Hour,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
} from './styles';

interface RouteParam {
  providerId: string;
}

export interface HoursAvailabilityItemProps {
  hour: number;
  avilability: boolean;
}

const CreateAppointment: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const { providerId } = route.params as RouteParam;
  const navigation = useNavigation();

  const [providers, setProviders] = useState<ProviderProps[]>([]);
  const [providerSelected, setProviderSelected] = useState(providerId);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectdDate] = useState(new Date());
  const [hoursAvailability, setHoursAvailability] = useState<
    HoursAvailabilityItemProps[]
  >([]);

  const [selectedHour, setSelectedHour] = useState(null);

  const handleSelectProvider = useCallback((id: string) => {
    setProviderSelected(id);
  }, []);

  const handleToggleDatePiker = useCallback(() => {
    setShowCalendar(state => !state);
  }, []);

  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowCalendar(false);
      }

      if (date) setSelectdDate(date);
    },
    [],
  );

  const handleFormatHour = useCallback((hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`;
  }, []);

  const handleSelectHour = useCallback(hour => {
    setSelectedHour(hour);
  }, []);
  const morningAvailability = useMemo(() => {
    return hoursAvailability.filter(
      item => item.hour <= 12 && item.avilability,
    );
  }, [hoursAvailability]);

  const afternoonAvailability = useMemo(() => {
    return hoursAvailability.filter(item => item.hour > 12 && item.avilability);
  }, [hoursAvailability]);

  useEffect(() => {
    apiClient.get<ProviderProps[]>('/providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  useEffect(() => {
    apiClient
      .get<HoursAvailabilityItemProps[]>(
        `providers/${providerSelected}/day-availability`,
        {
          params: {
            month: selectedDate.getMonth() + 1,
            year: selectedDate.getFullYear(),
            day: selectedDate.getDate(),
          },
        },
      )
      .then(response => {
        setHoursAvailability(response.data);
      });
  }, [selectedDate, providerSelected]);

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
      <Calendar>
        <CalendarTitle>Escolha a data</CalendarTitle>

        <ShowCalendarButton onPress={handleToggleDatePiker}>
          <ShowCalendarButtonText>Escolha uma nova data</ShowCalendarButtonText>
        </ShowCalendarButton>
        {showCalendar && (
          <DateTimePiker
            value={selectedDate}
            onChange={handleDateChanged}
            display="calendar"
            textColor="#f4ede8"
          />
        )}
      </Calendar>

      <Schedule>
        <ScheduleTitle>Escolha o horário</ScheduleTitle>
        <HoursListContainer>
          <HoursListTitle>Manhã</HoursListTitle>
          <HoursList
            horizontal
            data={morningAvailability}
            keyExtractor={item => handleFormatHour(item.hour)}
            renderItem={({ item }) => (
              <HourContainer
                selected={selectedHour === item.hour}
                onPress={() => handleSelectHour(item.hour)}
              >
                <Hour selected={selectedHour === item.hour}>
                  {handleFormatHour(item.hour)}
                </Hour>
              </HourContainer>
            )}
          />
        </HoursListContainer>

        <HoursListContainer>
          <HoursListTitle>Tarde</HoursListTitle>
          <HoursList
            horizontal
            data={afternoonAvailability}
            keyExtractor={item => handleFormatHour(item.hour)}
            renderItem={({ item }) => (
              <HourContainer
                selected={selectedHour === item.hour}
                onPress={() => handleSelectHour(item.hour)}
              >
                <Hour selected={selectedHour === item.hour}>
                  {handleFormatHour(item.hour)}
                </Hour>
              </HourContainer>
            )}
          />
        </HoursListContainer>
      </Schedule>
      <CreateAppointmentButton>
        <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
      </CreateAppointmentButton>
    </Container>
  );
};

export default CreateAppointment;
