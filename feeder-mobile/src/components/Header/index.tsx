import React from 'react';

import { SimpleLineIcons } from '@expo/vector-icons';
import * as S from './styles';

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {

    const handlePress = () => {

    }

    return (
        <S.Container>
            <S.Text>{title}</S.Text>

            <S.Icon onPress={handlePress}>
                <SimpleLineIcons
                    name="menu"
                    style={{ fontSize: 28, color: '#fff' }}
                />
            </S.Icon>
        </S.Container>
    );
}

