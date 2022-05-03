import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components';
import * as S from './src/styles/styles';
import theme from './src/styles/theme';

import Routes from './src/routes';


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

                <StatusBar style="auto" />

                <Routes />

            </ThemeProvider>
        </S.View>
    );

}
