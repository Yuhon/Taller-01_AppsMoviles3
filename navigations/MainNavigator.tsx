import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PerfilScreen from '../screens/PerfilScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

function MyStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Registro' component={RegistroScreen}/>
            <Stack.Screen name='Top' component={MyTop}/>
        </Stack.Navigator>
    )
}

function MyTop (){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={PerfilScreen}/>
        </Tab.Navigator>
    )
}

export function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}


