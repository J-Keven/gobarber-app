import React from 'react';

import {
  Container,
  Header,
  GoBackIcon,
  HeaderTitle,
  UserAvatar,
} from './styles';

const CreateAppointment: React.FC = () => {
  return (
    <Container>
      <Header>
        <GoBackIcon name="arrow-left" size={22} />
        <HeaderTitle>Agendamentos</HeaderTitle>
        <UserAvatar
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/50251304?s=460&u=f3ac62e5d926b4c8f2a8bc93e548ea7443ff5dbb&v=4',
          }}
        />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
