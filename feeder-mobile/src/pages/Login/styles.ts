import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Image = styled.Image`
  width: 10rem;
  height: 10rem;
  margin-bottom: 5rem;
`;

export const TextInput = styled.TextInput`
  border: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 1rem;
  margin: 1rem 0;
  height: 3rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  width: 80%;
  padding-left: 1rem;
`;

export const Button = styled.TouchableHighlight`
  border-radius: 1rem;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
`;
