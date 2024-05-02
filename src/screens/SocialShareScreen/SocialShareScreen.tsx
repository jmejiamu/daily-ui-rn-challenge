import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import { Entypo } from "@expo/vector-icons";

export const SocialShareScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerConatiner}>
        <GoBackArrow styleContainer={{ marginHorizontal: 0 }} />
        <Text style={styles.headerTtitle}>Social Net</Text>
        <Entypo name="dots-two-horizontal" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTtitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  headerConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
});
