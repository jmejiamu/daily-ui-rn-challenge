import React from "react";
import { StyleSheet, TextInput } from "react-native";
interface Props {
  placeHolder: string;
  onPress?: () => void;
}
export const CustomInput = (props: Props) => {
  const { placeHolder, onPress } = props;
  return (
    <TextInput
      placeholderTextColor="#A0A0A0"
      style={styles.input}
      placeholder={placeHolder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#333333",
  },
});
