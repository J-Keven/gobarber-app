import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidatorErrors from '../../utils/getValidatorErrors';
import { Conainer, Title, GoBackButton, GoBackButtonText } from './styles';

interface FormDataTypes {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);

  const handleFormSubmit = useCallback(async (data: FormDataTypes) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('O E-mail é obrigatório')
          .email('Digite um E-mail válido'),
        password: Yup.string().min(
          6,
          'A senha deve conter no minimo 6 digitos',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidatorErrors(error);
        formRef.current?.setErrors(errors);
      } else {
        Alert.alert(
          'Erro ao realizar cadastro',
          'Ocorreu um erro ao realizar o seu cadastro, por favor tente novamente',
        );
      }
    }
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
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => inputEmailRef.current?.focus()}
              />
              <Input
                ref={inputEmailRef}
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
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
