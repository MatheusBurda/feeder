import React from 'react';

import { SimpleLineIcons } from '@expo/vector-icons';

import * as S from './styles';
import * as G from '../../styles/styles'
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

interface DeviceProps {
    name: string;
    nextActivation: string;
    id?: string;
}

export function DeviceInfo({ name, nextActivation, id }: DeviceProps) {

    const navigation = useNavigation<navigationProp>();

    const goToSettings = () => {
        navigation.navigate('DeviceSettings');
    }

    return (
        <S.Container>
            <S.Title>{name}</S.Title>
            <S.Text>
                Next Activation:{"   "}
                <S.Highlight>
                    {nextActivation}
                </S.Highlight>
            </S.Text>
            <S.Text></S.Text>
            <S.Button onPress={goToSettings}>
                <G.Text>Settings</G.Text>
            </S.Button>
        </S.Container>
    );
}

