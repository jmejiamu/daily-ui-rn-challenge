import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import LottieView from "lottie-react-native";
import { CustomButton } from "../../components";

export const ErrorScreen = () => {
  const animation = React.useRef<LottieView>(null);
  const fadeAni = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAni, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e3a702" }}>
      <Animated.View
        style={{
          opacity: fadeAni,
          transform: [
            {
              translateY: fadeAni.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <GoBackArrow />
        <View style={styles.container}>
          <LottieView
            autoPlay
            ref={animation}
            style={styles.imgStyle}
            source={require("../../../assets/error.json")}
          />
          <View style={styles.containerText}>
            <Text style={styles.titleText}>Product Not Found</Text>
            <Text style={styles.subtitleText}>
              Oops! Looks like this product is not available at the moment.
            </Text>
            <View style={{ marginTop: "10%" }}>
              <CustomButton containerStyle={styles.btnStyle} text="Try again" />
            </View>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  btnStyle: {
    backgroundColor: "#232832",
  },
  imgStyle: {
    width: 400,
    height: 400,
  },
  subtitleText: {
    textAlign: "center",
    fontSize: 20,
    color: "#232832",
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerText: {
    marginHorizontal: 15,
    marginTop: "10%",
  },
});
