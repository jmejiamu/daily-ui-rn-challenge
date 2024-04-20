import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import { GoBackArrow } from "../../components/GoBackArrow";
import { MaterialIcons } from "@expo/vector-icons";
import { CustomButton } from "../../components";

export const CreditCard = () => {
  const [fadeInAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <GoBackArrow />
      </View>
      <Animated.View
        style={{
          marginHorizontal: 15,
          opacity: fadeInAnim,
          transform: [
            {
              translateY: fadeInAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Text style={styles.title}>Payment Method</Text>
        <View style={styles.divider} />
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/Card.png")}
        />
        <Text style={{ fontWeight: "600", fontSize: 20, marginTop: 20 }}>
          Payment Summary
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Total</Text>
          <Text style={styles.textStyle}>$50.99</Text>
        </View>
        <TouchableOpacity style={styles.paymentBtn}>
          <Text>Apple Pay</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ margin: 10 }} />
        <TouchableOpacity style={styles.paymentBtn}>
          <Text>Google Pay</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ margin: 10 }} />
        <TouchableOpacity style={styles.paymentBtn}>
          <Text>PayPal</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ margin: 10 }} />
        <TouchableOpacity style={styles.paymentBtn}>
          <Text>Credit Card</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ margin: 10 }} />
        <CustomButton
          text="Pay Now"
          containerStyle={{ backgroundColor: "#454545" }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontWeight: "800", fontSize: 17 },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  paymentBtn: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "900",
  },
  divider: {
    marginVertical: 15,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#454545",
  },
});
