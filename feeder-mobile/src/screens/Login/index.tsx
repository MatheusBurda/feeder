import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';
import { Controller, useForm } from 'react-hook-form';

import * as S from './styles';
import * as G from '../../styles/styles'
import theme from '../../styles/theme';
import api from '../../services/api';
import { isEmail } from '../../utils/verifyEmail';

import  { AxiosError } from 'axios'

interface LoginData {
    loginInfo: string;
    password: string;
}

interface ApiLoginInfo {
    username?: string;
    email?: string;
    password: string;
}

interface Response {
    responseUser: {
        id: string;
        email: string;
    },
    token: string;
}

const Login: React.FC = () => {

    const [error, setError] = useState('');

    const navigation = useNavigation<navigationProp>();

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
    }

    const { control, getValues, formState: { errors } } = useForm<LoginData>({
        defaultValues: {
            loginInfo: '',
            password: ''
        }
    });

    const onSubmit = async () => {
        const data = getValues();

        const { loginInfo, password } = data;

        const apiLoginInfo: ApiLoginInfo = isEmail(loginInfo) ?
            { email: loginInfo, password } :
            { username: loginInfo, password };

        try {

            const { data } = await api.post<Response>("/sessions", apiLoginInfo);

            api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;

            navigation.navigate('Home');

        } catch (err) {

            const error = err as AxiosError<{message: string}>;

            setError(error.response?.data.message || 'Could not authenticate');

        }
    }

    return (
        <G.SafeAreaView>

            <G.Container>

                <S.Image source={require('../../../assets/cw.png')} />

                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <G.TextInput
                            placeholder='Email or Username'
                            autoCompleteType='email'
                            placeholderTextColor={theme.colors.placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name="loginInfo"
                />


                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 8
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <G.TextInput
                            placeholder='Password'
                            placeholderTextColor={theme.colors.placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                            autoCapitalize='none'
                        />
                    )}
                    name="password"
                />

                <G.Button onPress={onSubmit} >
                    <G.Text >Sign in</G.Text>
                </G.Button>

                {error.length != 0 && <G.Error>{error}</G.Error>}

            </G.Container>
            <S.Container>
                <S.Text>
                    Don't have an account?  <S.Link onPress={navigateToSignUp}>
                        Sign Up
                    </S.Link>
                </S.Text>
            </S.Container>
        </G.SafeAreaView>
    );
};

export default Login;
