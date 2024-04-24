import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { GoBackArrow } from "../../components/GoBackArrow";
export const AppIconScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackArrow />
      <View style={{ justifyContent: "center", flex: 1 }}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 400,
            height: 400,
          }}
          source={require("../../../assets/hand-ani.json")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
