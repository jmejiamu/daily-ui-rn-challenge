import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
export const GoBackArrow = () => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 15 }}
      onPress={() => navigate.goBack()}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
