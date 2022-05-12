import styled from "styled-components/native"
import theme from "./theme";

export const View = styled.View`
    flex: 1;
    justify-content: center;
    width: 100%;
`

export const Error = styled.Text`
    color: ${theme.colors.red};
    font-size: 12px;
    font-family: ${theme.fonts.regular};
`;

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${theme.colors.backgroundDark};
    flex: 1;
    width: 100%;
`;

export const TextInput = styled.TextInput`
    border-bottom-width: 1px;
    border-color: ${theme.colors.border};
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
    padding: 16px 32px;
    background-color:  ${theme.colors.green};
`;

export const Text = styled.Text`
    color: ${theme.colors.text};
    font-size: 24px;
    font-family: ${theme.fonts.regular};
`;
