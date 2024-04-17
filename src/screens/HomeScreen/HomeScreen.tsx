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
      <View style={{ marginVertical: 15 }} />
      <Challenge
        onPress={() => navigate.navigate("CheckoutScreen")}
        text="Credit Card Checkout Challenge"
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
});
