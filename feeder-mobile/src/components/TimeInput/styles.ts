import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.shape};
    width: 100%;
    border-radius: 6px;
    margin-top: 10px;
    padding: 15px;
`;

export const Content = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`

export const IconButton = styled.TouchableOpacity`
    background-color: ${theme.colors.green};
    border-radius: 23px;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
`

export const IconButtonRed = styled.TouchableOpacity`
    background-color: ${theme.colors.red};
    border-radius: 23px;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    margin-left: 5px;
`

export const Text = styled.Text`
    color: ${theme.colors.placeholder};
    font-size: 24px;
    font-family: ${theme.fonts.regular};
`;
