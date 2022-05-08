import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    SignUp: undefined;

    /* Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined; */
};

import { StackNavigationProp } from '@react-navigation/stack';
export type navigationProp = StackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >

            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Home' component={Home} />

        </Stack.Navigator>
    );

};

export default AppRoutes;


