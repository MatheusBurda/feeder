import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
    font-size: 1.5rem;
    font-family: ${props => props.theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
`;
