import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const SafeAreaView = styled.SafeAreaView`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

export const Container = styled.ScrollView`
    display: flex;
    background-color: ${theme.colors.background};
    flex: 1;
    padding: 15px;
`;


export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`

export const IconButton = styled.View`
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
`

export const Button = styled.TouchableHighlight`
    width: 100%;
    border-radius: 5px;
    margin: 16px 0 0 0;
    padding: 16px 32px;
    background-color:  ${theme.colors.green};
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${theme.colors.placeholder};
    font-size: 24px;
    font-family: ${theme.fonts.regular};
`;

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.colors.shape};
    display: flex;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
