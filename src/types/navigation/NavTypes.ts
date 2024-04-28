import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  SignUpScreen: undefined;
  LogInScreen: undefined;
  CheckoutScreen: undefined;
  CreditCard: undefined;
  LandingScreen: undefined;
  CalculatorScreen: undefined;
  AppIconScreen: undefined;
  ProfileScreen: undefined;
  SettingScreen: undefined;
  ErrorScreen: undefined;
  MusicPlayerScreen: undefined;
};

export type RootStackNames = NativeStackNavigationProp<RootStackParamList>;
export type HomeScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;
export type SignUpScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "SignUpScreen"
>;
export type LogInScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "LogInScreen"
>;
export type CheckoutScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "CheckoutScreen"
>;
export type CreditCardScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "CreditCard"
>;
export type LandingScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "LandingScreen"
>;
export type CalculatorScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "CalculatorScreen"
>;
export type AppIconScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "AppIconScreen"
>;
export type ProfileScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "ProfileScreen"
>;
export type SettingScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "SettingScreen"
>;
export type ErrorScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "ErrorScreen"
>;
export type MusicScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  "MusicPlayerScreen"
>;
