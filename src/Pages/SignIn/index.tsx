import React, { useState, useEffect } from 'react';
import { Image, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Conainer,
  Title,
  ForgetPassword,
  ForgetPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardOpen(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardOpen(false));

    return () => {
      Keyboard.removeListener('keyboardDidShow', () => setKeyboardOpen(true));
      Keyboard.removeListener('keyboardDidHide', () => setKeyboardOpen(false));
    };
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Conainer>
          <Image source={logoImg} />
          <Title>{keyboardOpen}</Title>
          <Input
            name="email"
            icon="mail"
            placeholder="E-mail"
            onSubmitEditing={Keyboard.dismiss}
          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
            // onSubmitEditing={Keyboard.dismiss}
          />
          <Button onPress={() => console.log('auau')}>Entrar</Button>

          <ForgetPassword
            onPress={() => {
              console.log('ddddd');
            }}
          >
            <ForgetPasswordText>Esqueci minha senha</ForgetPasswordText>
          </ForgetPassword>
        </Conainer>
      </KeyboardAvoidingView>

      {!keyboardOpen && (
        <CreateAccountButton
          onPress={() => {
            console.log('ddddd');
          }}
        >
          <Feather name="log-in" size={24} color="#FF9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      )}
    </>
  );
};

export default SignIn;
