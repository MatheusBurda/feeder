import React from 'react';
import { TextInput, Text } from 'react-native';

import * as S from './styles';

const Login: React.FC = () => {
  return (
    <S.Container>
      <Text>Username</Text>
      <TextInput />
      <Text>Password</Text>
      <TextInput secureTextEntry />
    </S.Container>
  );
};

export default Login;