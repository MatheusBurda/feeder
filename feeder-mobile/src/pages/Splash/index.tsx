import React from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

const Login: React.FC = () => {

    const themeContext = useTheme();

/*     console.log(themeContext); */

    return (
        <S.Container theme={themeContext}>
            <S.Text theme={themeContext}>Sign in</S.Text>
        </S.Container>
    );

};

export default Login;
