import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
interface Props {
  color?: string;
  styleContainer?: StyleProp<ViewStyle>;
}
export const GoBackArrow = (props: Props) => {
  const { color = "black", styleContainer } = props;
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={[{ marginHorizontal: 15 }, styleContainer]}
      onPress={() => navigate.goBack()}
    >
      <AntDesign name="arrowleft" size={24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
