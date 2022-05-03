import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #131A22;
  flex: 1;
`;

export const TextInput = styled.TextInput`
  border: 2px;
  border-color: #fff;
  border-radius: 16px;
  margin: 16px 0;
  height: 48px;
  font-size: 24px;
  color: #fff;
  width: 80%;
  padding-left: 16px;
`;

export const Button = styled.TouchableHighlight`
  border-radius: 16px;
  margin: 16px 0;
  color: #fff;
  padding: 16px 32px;
  background-color: #2C365E;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 24px;
`;
