import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

interface Props {
  text: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomButton = (props: Props) => {
  const { text, onPress, containerStyle, textStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.btnContainer, containerStyle]}
    >
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#6C63FF",
    padding: 16,
    borderRadius: 30,
  },
  textStyle: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
