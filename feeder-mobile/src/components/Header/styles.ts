import styled from 'styled-components/native'

import theme from '../../styles/theme'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.green};
    padding: 60px 30px 30px 30px;
`

export const Text = styled.Text`
    font-size: 35px;
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.semiBold};
`;

export const Icon = styled.TouchableOpacity`
    background-color: ${theme.colors.green};
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    margin-right: 20px;
`
