import React, { useEffect, useRef } from "react";
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { GoBackArrow } from "../../components/GoBackArrow";
import { CustomButton } from "../../components";

const productList = [
  {
    projectIcon: "🥶",
    title: "Cold Face",
    description: "Description",
  },
  {
    projectIcon: "🔥",
    title: "On fire",
    description: "Description",
  },
  {
    projectIcon: "🍦",
    title: "Ice Cream",
    description: "Description",
  },
  {
    projectIcon: "🍔",
    title: "Burger",
    description: "Description",
  },
  {
    projectIcon: "🍟",
    title: "Fries",
    description: "Description",
  },
  {
    projectIcon: "🍕",
    title: "Pizza",
    description: "Description",
  },
  {
    projectIcon: "🍿",
    title: "Popcorn",
    description: "Description",
  },
];

export const ProfileScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#010205" }}>
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
        <View>
          <View
            style={{
              position: "absolute",
              top: 50,
              left: 10,
              zIndex: 1,
            }}
          >
            <GoBackArrow color="white" />
          </View>
          <Image
            style={{ height: 400, width: "100%" }}
            source={require("../../../assets/profile-pic.jpg")}
          />
          <LinearGradient
            colors={["transparent", "rgba(1,2,5,0.9)"]}
            style={styles.gradient}
          />
        </View>
        <Text style={[styles.userTextStyle]}>Madona Dev</Text>
        <Text style={styles.userSubTextStyle}>React Native developer</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 15,
          }}
        >
          <AntDesign name="linkedin-square" size={26} color="#fff" />
          <View style={{ margin: 10 }} />
          <Fontisto name="instagram" size={26} color="#fff" />
          <View style={{ margin: 10 }} />
          <AntDesign name="twitter" size={26} color="#fff" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
          }}
        >
          <CustomButton text="Edit Profile" containerStyle={{ flex: 1 }} />
          <View style={{ margin: 10 }} />
          <CustomButton
            text="Share Profile"
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#6C63FF",
              // flex: 1,
            }}
            textStyle={{ color: "#6C63FF" }}
          />
        </View>
        <Text
          style={{
            color: "#fff",
            marginHorizontal: 25,
            marginVertical: 15,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Projects
        </Text>
        <View style={{ marginLeft: 15 }}>
          <FlatList
            data={productList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginHorizontal: 10,
                  backgroundColor: "#232832",
                  height: 60,
                  width: 60,
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  {item.projectIcon}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text
          style={{
            color: "#fff",
            marginHorizontal: 25,
            marginVertical: 15,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          About
        </Text>
        <View style={{ marginHorizontal: 25 }}>
          <Text
            style={[
              styles.userSubTextStyle,
              { textAlign: "left", fontSize: 15 },
            ]}
          >
            React Native developer specializing in building cross-platform
            mobile applications with a focus on user experience and performance.
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userSubTextStyle: {
    color: "#dbdbdb",
    textAlign: "center",
    fontSize: 18,
  },
  userTextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 15,
  },
  gradient: {
    height: 400,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
