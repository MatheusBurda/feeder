import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput />
      <Text>Password</Text>
      <TextInput secureTextEntry />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;