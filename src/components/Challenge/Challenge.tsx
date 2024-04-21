import React, { useState } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  onPress?: () => void;
  toValue?: number;
}

export const Challenge = (props: Props) => {
  const { containerStyle, text, onPress, toValue = 0.9 } = props;
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: toValue,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  const buttonScale = {
    transform: [{ scale: scaleValue }],
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.5}
      style={[styles.container, containerStyle, buttonScale]}
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
  button: {
    // padding: 15,
    // alignItems: "center",
    // borderRadius: 5,
    borderRadius: 30,
  },
});
