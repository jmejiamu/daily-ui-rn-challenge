import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { CustomButton } from "../../components";
import { GoBackArrow } from "../../components/GoBackArrow";

export const SettingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#010205", flex: 1 }}>
      <Animated.ScrollView
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
        <GoBackArrow color="white" />
        <View style={{ marginHorizontal: 15 }}>
          <Text style={styles.settingTextStyle}>Setting</Text>
          <View style={styles.headerContainer}>
            <Image
              source={require("../../../assets/profile.jpg")}
              style={styles.imgStyle}
            />
            <View style={styles.subtitleHeader}>
              <Text style={{ color: "#fff", fontSize: 30, fontWeight: "600" }}>
                Marry Chris
              </Text>
              <Text
                style={{ color: "#dbdbdb", fontSize: 15, fontWeight: "600" }}
              >
                Software Engineer | React Native
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              containerStyle={{ flex: 1, backgroundColor: "#232832" }}
              text="Edit profile"
            />
            <View style={{ margin: 10 }} />
            <CustomButton
              text="Delete Account"
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "#232832",
                borderWidth: 2,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 15,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#6C63FF",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <AntDesign name="poweroff" size={30} color="#fff" />
            </View>

            <View
              style={{
                backgroundColor: "#232832",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Ionicons name="lock-open-outline" size={30} color="#fff" />
            </View>
            <View
              style={{
                backgroundColor: "#232832",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <AntDesign name="camerao" size={30} color="#fff" />
            </View>
            <View
              style={{
                backgroundColor: "#232832",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Ionicons name="alarm-outline" size={30} color="#fff" />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "#232832", height: 8 }} />
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#dbdbdb", fontSize: 15, fontWeight: "600" }}>
            My Home
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={35} color="#fff" />
        </View>
        <View style={{ backgroundColor: "#232832", height: 1 }} />
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#dbdbdb", fontSize: 15, fontWeight: "600" }}>
            Messages
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={35} color="#fff" />
        </View>
        <View style={{ backgroundColor: "#232832", height: 1 }} />
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#dbdbdb", fontSize: 15, fontWeight: "600" }}>
            Family
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={35} color="#fff" />
        </View>
        <View style={{ backgroundColor: "#232832", height: 8 }} />
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#dbdbdb", fontSize: 15, fontWeight: "600" }}>
            Security setting
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={35} color="#fff" />
        </View>
        <View style={{ backgroundColor: "#232832", height: 1 }} />
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#dbdbdb", fontSize: 15, fontWeight: "600" }}>
            Support
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={35} color="#fff" />
        </View>
        <View style={{ backgroundColor: "#232832", height: 1 }} />
        <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
          <CustomButton text="Sign Out" />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitleHeader: { justifyContent: "flex-end", marginLeft: 15 },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  settingTextStyle: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },
});
