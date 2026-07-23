import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegistroScreen from "../screens/RegistroScreen";
import MyTop from "./MyTop";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Registro"
        component={RegistroScreen}
      />

      <Stack.Screen
        name="Top"
        component={MyTop}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}