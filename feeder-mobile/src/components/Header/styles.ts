import styled from 'styled-components/native'

import theme from '../../styles/theme'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    background-color: ${theme.colors.green};
    padding: 30px;
`

export const Text = styled.Text`
    font-size: 38px;
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.semiBold};
    line-height: 40px;
`;

export const Icon = styled.TouchableOpacity`
    background-color: ${theme.colors.green};
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
`
