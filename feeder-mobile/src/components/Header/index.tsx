import React from 'react';

import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {

    const navigation = useNavigation<navigationProp>();

    const handlePress = () => {
        if (navigation.canGoBack())
            navigation.goBack();
    }

    return (
        <S.Container>

            <S.Icon onPress={handlePress}>
                <Entypo
                    name="chevron-left"
                    style={{ fontSize: 28, color: '#fff' }}
                />
            </S.Icon>

            <S.Text>{title}</S.Text>

        </S.Container>
    );
}

