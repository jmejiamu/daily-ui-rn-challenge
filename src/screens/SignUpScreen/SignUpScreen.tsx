import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { CustomButton } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LogInScreenNavProps } from "../../types";

export const SignUpScreen = () => {
  const { width } = useWindowDimensions();
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigate = useNavigation<LogInScreenNavProps>();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity
          style={{ marginHorizontal: 15 }}
          onPress={() => navigate.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/welcome.png")}
          style={{
            width: width,
            height: 300,
          }}
        />
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginVertical: "20%" }}>
            <Text style={styles.textStyle}>Join us today</Text>
            <Text style={styles.subtitleStyle}>
              Step into a Community of Innovators
            </Text>
          </View>

          <CustomButton text="Get Started" />

          <View style={styles.divider} />

          <CustomButton
            text="Sign In"
            containerStyle={styles.signInBntStyle}
            textStyle={{ color: "#6C63FF" }}
            onPress={() => navigate.navigate("LogInScreen")}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitleStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "grey",
  },
  signInBntStyle: {
    borderColor: "#6C63FF",
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  divider: {
    marginVertical: 15,
  },
});
