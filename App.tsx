import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigations/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}