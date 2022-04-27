import React from 'react';

import * as S from './styles';

const Login: React.FC = () => {

    return (
        <S.Container>
            <S.Image source={require('../../assets/cw.png')} />
            <S.TextInput placeholder='Email' autoCompleteType='email' />
            <S.TextInput secureTextEntry placeholder='Password' />
            <S.Button>
                <S.Text>Sign in</S.Text>
            </S.Button>
        </S.Container>
    );
};

export default Login;
