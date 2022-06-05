import styled from 'styled-components/native';
import theme from '../../styles/theme';


interface ContainerProps {
    vertical: boolean;
}

export const Container = styled.View<ContainerProps>`
    display: flex;
    flex: 1;
    flex-direction: ${(prop)=> prop.vertical ? 'column-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
    align-content: center;
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
`

export const Text = styled.Text`
    color: ${theme.colors.placeholder};
    font-size: 24px;
    font-family: ${theme.fonts.regular};
`;
