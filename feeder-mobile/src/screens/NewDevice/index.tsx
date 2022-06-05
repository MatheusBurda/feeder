import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles'
import * as G from '../../styles/styles'

import { Header } from '../../components/Header';

const NewDevice: React.FC = () => {

    const navigation = useNavigation<navigationProp>();

    const confirmAndCreate = () => {
        navigation.navigate('Home');
    }

    return (
        <S.SafeAreaView>

            <Header title='New Device' />

            <S.Container>

                <G.TextInputDark />

                <S.Button onPress={confirmAndCreate}>
                    <G.Text>Save and Create</G.Text>
                </S.Button>

            </S.Container>

        </S.SafeAreaView>
    );
};

export default NewDevice;
