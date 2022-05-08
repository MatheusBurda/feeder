import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Image = styled.Image`
    width: 125px;
    height: 150px;
    margin-bottom: 30px;
`;

export const Link = styled.Text`
    color: ${theme.colors.green};
    font-size: 18px;
    font-family: ${theme.fonts.regular};
`;

export const Text = styled.Text`
    color: ${theme.colors.text};
    font-size: 18px;
    font-family: ${theme.fonts.regular};
`;

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${theme.colors.backgroundDark};
    width: 100%;
    padding: 15px;
`;
