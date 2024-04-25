import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AppIconScreen,
  CalculatorScreen,
  CheckoutScreen,
  CreditCard,
  HomeScreen,
  LadingScreen,
  LogInScreen,
  ProfileScreen,
  SettingScreen,
  SignUpScreen,
} from "./src/screens";
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
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="CheckoutScreen"
          component={CheckoutScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="CreditCard"
          component={CreditCard}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="LandingScreen"
          component={LadingScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="CalculatorScreen"
          component={CalculatorScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="AppIconScreen"
          component={AppIconScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFF" },
          }}
          name="SettingScreen"
          component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
