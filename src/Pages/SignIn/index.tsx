import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidatorErros from '../../utils/getValidatorErrors';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Title,
  ForgetPassword,
  ForgetPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

interface FormDataTypes {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { sigIn } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const inputPasswordRef = useRef<TextInput>(null);
  const [opneKeyboard, setOpenKeyboard] = useState(false);
  const handleFormSubmit = useCallback(
    async (data: FormDataTypes) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O E-mail é origatório')
            .email('Digite um E-mail válido'),

          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await sigIn(data);

        navigation.navigate('Dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidatorErros(err);
          formRef.current?.setErrors(erros);
        } else {
          Alert.alert(
            'Erro na altenticação',
            'Ocorreu um erro ao fazer login, cheque suas credenciais.',
          );
        }
      }
    },
    [sigIn, navigation],
  );

  const handleKeyboardDidShow = useCallback(() => {
    setOpenKeyboard(true);
  }, []);

  const handleKeyboardDidHide = useCallback(() => {
    setOpenKeyboard(false);
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
    };
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
            <Input
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              icon="mail"
              returnKeyType="next"
              placeholder="E-mail"
              onSubmitEditing={() => inputPasswordRef.current?.focus()}
            />
            <Input
              ref={inputPasswordRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Form>
          <ForgetPassword onPress={() => console.log('auau')}>
            <ForgetPasswordText>Esqueci minha senha</ForgetPasswordText>
          </ForgetPassword>
        </Container>
      </KeyboardAvoidingView>
      {!opneKeyboard && (
        <CreateAccountButton onPress={() => navigation.navigate('Signup')}>
          <Feather name="log-in" size={24} color="#FF9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      )}
    </>
  );
};

export default SignIn;
