import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import WelcomeScreenComponent from "../screens/WelcomeScreen";

import { useNavigation } from "@react-navigation/native";

// Define the navigation prop type
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;
type WelcomeScreenRouteProp = RouteProp<RootStackParamList, "Welcome">;

type Props = {
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>Nurse Connect</Text>
      <Text style={styles.subtitle}>
        Connect with your colleagues and enhance patient care.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#626ae7",
    paddingVertical: 15,
    width: "95%",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
