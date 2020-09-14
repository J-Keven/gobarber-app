import React from 'react';
import { Image } from 'react-native';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Conainer, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Conainer>
      <Image source={logoImg} />
      <Title>Faça seu login</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button onPress={() => console.log('auau')}>Entrar</Button>
    </Conainer>
  );
};

export default SignIn;
