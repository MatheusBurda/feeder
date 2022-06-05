import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Title = styled.Text`
    color: ${theme.colors.backgroundDark};
    font-family: ${theme.fonts.semiBold};
    font-size: 32px;
`;

export const Text = styled.Text`
    color: ${theme.colors.backgroundDark};
    font-size: 24px;
    font-family: ${theme.fonts.regular};
`;

export const Highlight = styled.Text`
    color: ${theme.colors.green};
    font-size: 24px;
    font-family: ${theme.fonts.regular};
`;

export const Container = styled.View`
    margin-bottom: 15px;
    background-color: ${theme.colors.shape};
    display: flex;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
`;

export const Button = styled.TouchableHighlight`
    width: 100%;
    border-radius: 5px;
    margin: 0;
    padding: 16px 32px;
    background-color:  ${theme.colors.green};
    justify-content: center;
    align-items: center;
`;
