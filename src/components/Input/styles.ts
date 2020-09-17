import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #232129;
  padding: 0 16px;

  ${props =>
    props.isError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #f4ede8;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
