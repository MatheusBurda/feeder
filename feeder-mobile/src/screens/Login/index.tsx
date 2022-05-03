import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles';
import api from '../../services/api';

const Login: React.FC = () => {

    const navigation = useNavigation<navigationProp>();

    const handleSubmit = () => {

        /* Testar RegEx se é email ou nao e depois fazer o request */

        try {


        } catch (err) {

        }

        navigation.navigate('SignUp');
    }

    return (
        <S.SafeAreaView>

            <S.Container>

                <S.Image source={require('../../../assets/cw.png')} />
                <S.TextInput
                    placeholder='Email or Username'
                    autoCompleteType='email'
                    placeholderTextColor={'#999999'}
                />
                <S.TextInput
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor={'#999999'}
                />
                <S.Button onPress={handleSubmit}>
                    <S.Text>Sign in</S.Text>
                </S.Button>

            </S.Container>

        </S.SafeAreaView>
    );
};

export default Login;
