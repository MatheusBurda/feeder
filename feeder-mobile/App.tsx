import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeProvider } from 'styled-components';
import * as S from './src/styles/styles';
import theme from './src/styles/theme';

import Login from './src/pages/Login';
import Splash from './src/pages/Splash';

const Stack = createNativeStackNavigator();

export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <S.View>
            <ThemeProvider theme={theme}>
                <Splash />
                {/*
                 <StatusBar style="auto" />
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>
                </NavigationContainer> */}
            </ThemeProvider>
        </S.View>
    );

}
