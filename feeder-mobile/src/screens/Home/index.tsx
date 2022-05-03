import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles'

import { Header } from '../../components/Header';

const Login: React.FC = () => {

    const navigation = useNavigation<navigationProp>();

    const handleSubmit = () => {
        navigation.navigate('SignUp');
    }

    return (
        <S.SafeAreaView>

            <Header title='Olá, Matheus' />

            <S.Container>


            </S.Container>

        </S.SafeAreaView>
    );
};

export default Login;
