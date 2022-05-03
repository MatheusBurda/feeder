import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';

import { navigationProp } from '../../routes/stack.routes';
import api from '../../services/api';

interface Response {
    user: {
        email: string;
        username: string;
    },
    token: string;
}

const SignUp: React.FC = () => {

    const navigation = useNavigation<navigationProp>();

    const handleSubmit = async () => {
        try {

            const { data } = await api.post<Response>("/users", {
                email: "burjhonson@utfpr.edu.br",
                password: "pastel" });

            api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;

            navigation.navigate('Home');

        } catch (err) {
            console.log(err);
        }
    }

    const returnToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <S.SafeAreaView >
            <S.Container >

                <S.IconButton onPress={returnToLogin}>
                    <Entypo
                        name="chevron-left"
                        style={{ fontSize: 24, color: '#fff' }}
                    />
                </S.IconButton>

                <S.TextInput
                    placeholder='Nome'
                    autoCompleteType='name'
                    placeholderTextColor={'#999999'}
                />

                <S.TextInput
                    placeholder='Email'
                    autoCompleteType='email'
                    placeholderTextColor={'#999999'}
                />
                <S.TextInput
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor={'#999999'}
                />
                <S.Button onPress={() => handleSubmit()} >
                    <S.Text >Sign up</S.Text>
                </S.Button>
            </S.Container>
        </S.SafeAreaView>
    );

};

export default SignUp;
