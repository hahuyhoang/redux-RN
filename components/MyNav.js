import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Logout from '../screens/Logout';
import { Provider } from "react-redux";
import { store } from '../screens/redux/store';


const Stack = createNativeStackNavigator();

function StackNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator>
                </StackNavigator>
            </NavigationContainer>
        </Provider>
    )
}
export default MainNavigator;
