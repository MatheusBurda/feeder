import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    disabled: boolean;
}

export function Button({ title, disabled, ...rest }: ButtonProps) {
    return (
        <Container disabled={disabled}>
            <Text>
                {title}
            </Text>
        </Container>
    )
}


