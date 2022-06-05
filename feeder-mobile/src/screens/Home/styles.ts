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
    width: 100%;
    padding: 15px;
`;

export const IconButton = styled.View`
    background-color: ${theme.colors.green};
    border-radius: 23px;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    color: ${theme.colors.text};
`

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${theme.colors.shape};
    display: flex;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
