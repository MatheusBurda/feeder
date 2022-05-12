import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';
import { Controller, useForm } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';
import * as G from '../../styles/styles'
import theme from '../../styles/theme';
import api from '../../services/api';
import { isEmail } from '../../utils/verifyEmail';

interface Response {
    user: {
        email: string;
        username: string;
    },
    token: string;
}

interface FormData {
    username: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {

    const { control, handleSubmit, getValues, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async () => {

        const { username, email, password } = getValues();

        try {

            const { data } = await api.post<Response>("/users",);

            api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;

            navigation.navigate('Home');

        } catch (err) {
            console.log(err);
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
                        />
                    )}
                    name="username"
                />
                {errors.username && <G.Error>{errors.username.message}</G.Error>}

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
                        />
                    )}
                    name="email"
                />
                {errors.email && <G.Error>{errors.email.message}</G.Error>}

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
                        />
                    )}
                    name="password"
                />
                {errors.password && <G.Error>{errors.password.message}</G.Error>}

                <G.Button onPress={() => handleSubmit(onSubmit)} >
                    <G.Text>Sign up</G.Text>
                </G.Button>
            </G.Container>
        </G.SafeAreaView>
    );

};

export default SignUp;
