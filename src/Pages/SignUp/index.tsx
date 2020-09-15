import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Conainer, Title, GoBackButton, GoBackButtonText } from './styles';

const SignUp: React.FC = () => {
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
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Conainer>
            <Image source={logoImg} />
            <Title>Crie sua conta</Title>

            <Form
              ref={formRef}
              onSubmit={handleFormSubmit}
              style={{ width: '100%' }}
            >
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Form>
          </Conainer>
        </ScrollView>
      </KeyboardAvoidingView>

      <GoBackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#f4ede8" />
        <GoBackButtonText>Voltar para o login</GoBackButtonText>
      </GoBackButton>
    </>
  );
};

export default SignUp;
