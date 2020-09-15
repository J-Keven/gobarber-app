import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Feather from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Title,
  ForgetPassword,
  ForgetPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const handleFormSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Faça seu login</Title>
          </View>
          <Form
            ref={formRef}
            onSubmit={handleFormSubmit}
            style={{ width: '100%' }}
          >
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Form>
          <ForgetPassword onPress={() => console.log('auau')}>
            <ForgetPasswordText>Esqueci minha senha</ForgetPasswordText>
          </ForgetPassword>
        </Container>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('Signup')}>
        <Feather name="log-in" size={24} color="#FF9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
