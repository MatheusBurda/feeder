import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native'

import theme from '../../styles/theme'

interface ButtonProps extends TouchableOpacityProps {
    disabled: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps> `
    background-color: ${(props) => { return props.disabled ? theme.colors.green_dark : theme.colors.green }};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 20px;
    height: 50px;
`;

export const Text = styled.Text`
    color: ${theme.colors.shape};
    font-size: 20px;
    font-family: ${theme.fonts.semiBold};
`;
