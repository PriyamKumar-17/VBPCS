import React from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

// Define types for navigation
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access Account</Text>
      <Text style={styles.subtitle}>
        Please enter your credentials to access the system
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={18} color="#777" style={styles.icon} />
        <TextInput placeholder="Enter your username" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={18} color="#777" style={styles.icon} />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 17,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  forgotPassword: {
    color: "#626ae7",
    fontSize: 14,
    alignSelf: "flex-end",
    marginTop: 15,
    marginBottom: 17,
    marginLeft: 225,
  },
  button: {
    backgroundColor: "#626ae7",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
