import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Global from './src/styles/global';

import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container} >
      <Global />
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d32929',
    alignItems: 'center',
    justifyContent: 'center',
  },
});