import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';
import { Controller, useForm } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';
import * as G from '../../styles/styles'
import theme from '../../styles/theme';
import api from '../../services/api';
import { AxiosError } from 'axios';

interface Response {
    user: {
        email: string;
        username: string;
    },
    token: string;
}

interface NewUserProps {
    username: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {

    const [error, setError] = useState('');

    const { control, getValues, formState: { errors } } = useForm<NewUserProps>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async () => {

        const { username, email, password }: NewUserProps = getValues();

        if(username.length < 8){
            setError('Username must have at least 8 characters');
            return;
        }

        try {

            await api.post("/users", { username, email, password });

            const { data } = await api.post<Response>("/sessions", { email, password });

            api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;

            navigation.navigate('Home');

        } catch (err) {
            const error = err as AxiosError<{message: string}>;

            setError(error.response?.data.message || 'Could not Sign Up');
        }

    }

    const navigation = useNavigation<navigationProp>();

    const returnToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <G.SafeAreaView >
            <G.Container >

                <S.IconButton onPress={returnToLogin}>
                    <Entypo
                        name="chevron-left"
                        style={{ fontSize: 24, color: '#fff' }}
                    />
                </S.IconButton>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 8
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <G.TextInput
                            placeholder='Username'
                            autoCompleteType='username'
                            placeholderTextColor={theme.colors.placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name="username"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 8
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <G.TextInput
                            placeholder='Email'
                            autoCompleteType='email'
                            placeholderTextColor={theme.colors.placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name="email"
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

                {error.length != 0 && <G.Error>{error}</G.Error>}

                <G.Button onPress={() => onSubmit()}>
                    <G.Text>Sign up</G.Text>
                </G.Button>
            </G.Container>
        </G.SafeAreaView>
    );

};

export default SignUp;
