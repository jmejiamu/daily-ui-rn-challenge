import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Challenge } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavProps } from "../../types";

export const HomeScreen = () => {
  const navigate = useNavigation<SignUpScreenNavProps>();
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Daily Challenge</Text>
      <Challenge
        onPress={() => navigate.navigate("SignUpScreen")}
        // containerStyle={{ backgroundColor: "red" }}
        text="Sign up Challenge"
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
