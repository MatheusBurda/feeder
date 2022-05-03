import React from 'react';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Container, Icon, Text } from './styles';

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {

    const handlePress = () => {

    }

    return (
        <Container>
            <Text>{title}</Text>

            <Icon onPress={handlePress}>
                <SimpleLineIcons
                    name="menu"
                    style={{ fontSize: 28, color: '#fff' }}
                />
            </Icon>
        </Container>
    );
}

