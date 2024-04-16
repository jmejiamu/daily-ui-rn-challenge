import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  onPress?: () => void;
}

export const Challenge = (props: Props) => {
  const { containerStyle, text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.container, containerStyle]}
    >
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 30,
    borderWidth: 1,
    marginHorizontal: 10,
  },
});
