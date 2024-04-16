import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LogInScreen, SignUpScreen } from "./src/screens";
import { RootStackParamList } from "./src/types/navigation/NavTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="LogInScreen"
          component={LogInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
