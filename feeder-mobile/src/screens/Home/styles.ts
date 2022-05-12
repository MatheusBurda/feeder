import styled from 'styled-components/native';
import theme from '../../styles/theme';

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
    background-color: ${theme.colors.background};
    flex: 1;
    width: 100%;
`;
