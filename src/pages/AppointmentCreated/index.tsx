import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  Description,
  OkButtom,
  OkButtomText,
} from './styles';

interface RouteParams {
  date: Date;
  providerName: string;
}

const AppointmentCreated: React.FC = () => {
  return (
    <Container>
      <Feather name="check" color="#04D361" size={78} />
      <Title>Agendamento concluído</Title>
      <Description>
        Terça, dia 14 de março de 2020 às 12:00h com Diego Fernandes
      </Description>
      <OkButtom>
        <OkButtomText>Ok</OkButtomText>
      </OkButtom>
    </Container>
  );
};

export default AppointmentCreated;
