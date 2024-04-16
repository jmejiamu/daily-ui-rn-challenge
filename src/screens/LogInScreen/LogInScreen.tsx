import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { CustomButton, CustomInput } from "../../components";

export const LogInScreen = () => {
  const navigate = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));

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
        <Text style={styles.textStyle}>Welcome Back!</Text>
        <Image
          source={require("../../../assets/login.png")}
          style={styles.imgStyle}
        />
        <View style={{ marginHorizontal: 16, marginTop: 10 }}>
          <CustomInput placeHolder="Email" />
          <CustomInput placeHolder="Password" />
          <View style={styles.divider} />
          <CustomButton text="Sign In" />
          <View style={styles.lineDIviderStyle}>
            <View style={styles.horizontalLineStyle} />
            <Text style={{ color: "#A0A0A0" }}>or</Text>
            <View style={styles.horizontalLineStyle} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.socialMediaIcons}>
              <AntDesign
                style={{ marginLeft: 10 }}
                name="google"
                size={30}
                color="#de0404"
              />
              <Text style={styles.socialMediaText}>Google</Text>
            </TouchableOpacity>
            <View style={{ margin: 15 }} />
            <TouchableOpacity style={styles.socialMediaIcons}>
              <Entypo
                style={{ marginLeft: 10 }}
                name="facebook-with-circle"
                size={30}
                color="#046ade"
              />
              <Text style={styles.socialMediaText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  socialMediaText: {
    marginLeft: 10,
    color: "#A0A0A0",
    fontWeight: "700",
  },
  socialMediaIcons: {
    borderWidth: 1,
    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderColor: "#A0A0A0",
  },
  horizontalLineStyle: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A0A0A0",
  },
  lineDIviderStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginVertical: 20,
  },
  imgStyle: {
    width: "100%",
    height: 300,
  },
  textStyle: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  divider: {
    marginVertical: 10,
  },
});
