import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GoBackArrow } from "../../components/GoBackArrow";

export const CheckoutScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <GoBackArrow />
        <View
          style={{
            justifyContent: "center",
            // flexDirection: "row",
            // alignItems: "center",
            // alignSelf: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Cart
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <Text>CheckoutScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
