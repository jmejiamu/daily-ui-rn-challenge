import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { GoBackArrow } from "../../components/GoBackArrow";

export const LadingScreen = () => {
  const { width } = useWindowDimensions();
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
          <GoBackArrow />
          <Text style={styles.titleStyle}>Applications for the future</Text>
          <Image
            source={require("../../../assets/landing.png")}
            style={{ width: width, height: 500 }}
          />
          <View style={{ marginHorizontal: 15 }}>
            <View style={styles.cardContainer}>
              <Text style={{ fontSize: 60 }}>🍦</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>
                  AI-Powered Personal Assistants
                </Text>
                <Text style={{ textAlign: "justify" }}>
                  As AI and machine learning technologies continue to advance,
                  we can expect to see more sophisticated and personalized
                  virtual assistants that can manage daily tasks, schedule
                  appointments, and provide real-time information tailored to
                  individual preferences and needs.
                </Text>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Text style={{ fontSize: 60 }}>🔥</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>
                  Virtual Reality (VR) and Augmented Reality (AR) in Education
                  and Training
                </Text>
                <Text style={{ textAlign: "justify" }}>
                  VR and AR technologies have the potential to revolutionize the
                  way we learn and train by creating immersive and interactive
                  experiences. From virtual classrooms and training simulations
                  to interactive museums and historical recreations, the
                  applications are vast and diverse.
                </Text>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Text style={{ fontSize: 60 }}>🍔</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>
                  Smart Cities and IoT Integration
                </Text>
                <Text style={{ textAlign: "justify" }}>
                  The concept of smart cities, where various IoT devices and
                  sensors are interconnected to improve the quality of life for
                  residents, is gaining momentum. From smart transportation
                  systems and energy-efficient buildings to intelligent waste
                  management and public safety solutions, the potential
                  applications for IoT in urban planning and management are
                  limitless.
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardTitle: { fontSize: 15, fontWeight: "600" },
  cardContainer: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
