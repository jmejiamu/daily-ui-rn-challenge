import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { GoBackArrow } from "../../components/GoBackArrow";

export const LadingScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackArrow />
      <Text>LadingPage</Text>
      {/* <Image
        source={require("../../../assets/landing-screen.png")}
        style={{ width: width, height: 400 }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
