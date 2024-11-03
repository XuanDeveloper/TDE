import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import WeatherApp from "../screens/WeatherApp";
import Intro from "../screens/IntroScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Weather"
        component={WeatherApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
