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
    <ScrollView style={styles.mainContainer}>
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
          <View style={styles.goBackContainer}>
            <GoBackArrow color="white" />
          </View>
          <Image
            style={styles.imgStyle}
            source={require("../../../assets/profile-pic.jpg")}
          />
          <LinearGradient
            colors={["transparent", "rgba(1,2,5,0.9)"]}
            style={styles.gradient}
          />
        </View>
        <Text style={styles.userTextStyle}>Madona Dev</Text>
        <Text style={styles.userSubTextStyle}>React Native developer</Text>
        <View style={styles.iconContainer}>
          <AntDesign name="linkedin-square" size={26} color="#fff" />
          <View style={{ margin: 10 }} />
          <Fontisto name="instagram" size={26} color="#fff" />
          <View style={{ margin: 10 }} />
          <AntDesign name="twitter" size={26} color="#fff" />
        </View>
        <View style={styles.btnMainContainer}>
          <CustomButton text="Edit Profile" containerStyle={{ flex: 1 }} />
          <View style={{ margin: 10 }} />
          <CustomButton
            text="Share Profile"
            containerStyle={styles.shareBtnStyle}
            textStyle={{ color: "#6C63FF" }}
          />
        </View>
        <Text style={styles.projectTextStyle}>Projects</Text>
        <View style={{ marginLeft: 15 }}>
          <FlatList
            data={productList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.projectContainer}
              >
                <Text style={styles.iconStyle}>{item.projectIcon}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.aboutHeader}>About</Text>
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
  aboutHeader: {
    color: "#fff",
    marginHorizontal: 25,
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconStyle: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
  projectContainer: {
    marginHorizontal: 10,
    backgroundColor: "#232832",
    height: 60,
    width: 60,
    justifyContent: "center",
    borderRadius: 10,
  },
  projectTextStyle: {
    color: "#fff",
    marginHorizontal: 25,
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  shareBtnStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#6C63FF",
  },
  btnMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  imgStyle: {
    height: 400,
    width: "100%",
  },
  goBackContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#010205",
  },
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
