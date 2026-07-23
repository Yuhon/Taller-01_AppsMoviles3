import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import PerfilScreen from "../screens/PerfilScreen";
import RegistroScreen from "../screens/RegistroScreen";

const Tab = createMaterialTopTabNavigator();

export default function MyTop() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
        },
        tabBarStyle: {
        backgroundColor: "#1976D2",
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#BBDEFB",
        tabBarIndicatorStyle: {
        backgroundColor: "#FFFFFF",
        height: 3,
        },
    }}
    >
    <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
    />

    <Tab.Screen
        name="Registro"
        component={RegistroScreen}
    />
    </Tab.Navigator>
);
}