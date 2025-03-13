import React from "react";
import { Text, StyleSheet } from "react-native";

interface ThemedTextProps {
  children: React.ReactNode;
  style?: any;
}

const ThemedText: React.FC<ThemedTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "black",
  },
});

export default ThemedText;
