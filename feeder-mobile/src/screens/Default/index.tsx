import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as S from './styles';

const PageName: React.FC = () => {

    const theme = useTheme();

    const navigation = useNavigation();

    return (
        <S.SafeAreaView theme={theme}>
            <S.Container theme={theme}>
                <S.TextInput placeholder='Email' autoCompleteType='email' theme={theme} />
                <S.TextInput secureTextEntry placeholder='Password' theme={theme} />
                <S.Button theme={theme}>
                    <S.Text theme={theme}>Sign in</S.Text>
                </S.Button>
            </S.Container>
        </S.SafeAreaView>
    );

};

export default PageName;
