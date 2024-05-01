import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Challenge } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { RootStackNames } from "../../types";

export const HomeScreen = () => {
  const navigate = useNavigation<RootStackNames>();
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Daily Challenge</Text>
      <Challenge
        onPress={() => navigate.navigate("SignUpScreen")}
        text="Sign up Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("CheckoutScreen")}
        text="Credit Card Checkout Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("LandingScreen")}
        text="Landing Screen Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("CalculatorScreen")}
        text="Calculator Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("AppIconScreen")}
        text="App Icon Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("ProfileScreen")}
        text="Profile Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("SettingScreen")}
        text="Setting Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("ErrorScreen")}
        text="Error Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("MusicPlayerScreen")}
        text="Music Player Challenge"
      />
      <View style={{ margin: 10 }} />
      <Challenge
        onPress={() => navigate.navigate("SocialShareScreen")}
        text="Social Share Challenge"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    marginVertical: 15,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
});
