import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${theme.colors.backgroundDark};
    flex: 1;
`;

export const TextInput = styled.TextInput`
    border: 2px;
    border-color: #fff;
    border-radius: 16px;
    margin: 16px 0;
    height: 48px;
    font-size: 24px;
    color: ${theme.colors.text};
    width: 80%;
    padding-left: 16px;
`;

export const Button = styled.TouchableHighlight`
    border-radius: 16px;
    margin: 16px 0;
    color: ${theme.colors.text};
    padding: 16px 32px;
    background-color: ${theme.colors.green};
`;

export const Text = styled.Text`
    color: ${theme.colors.text};
    font-size: 24px;
`;

export const IconButton = styled.TouchableOpacity`
    background-color: ${theme.colors.green};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    color: ${theme.colors.text};
    position: absolute;
    left: 40px;
    top: 40px;
`

