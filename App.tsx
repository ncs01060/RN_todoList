import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screen/MainScreen";
import InputScreen from "./screen/InputScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tap = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tap.Navigator>
        <Tap.Screen name="Home" component={MainScreen} />
        <Tap.Screen name="Input" component={InputScreen} />
      </Tap.Navigator>
    </NavigationContainer>
  );
}
