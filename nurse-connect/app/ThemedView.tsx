import React from "react";
import { View, StyleSheet } from "react-native";

interface ThemedViewProps {
  children: React.ReactNode;
  style?: any;
}

const ThemedView: React.FC<ThemedViewProps> = ({ children, style }) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
  },
});

export default ThemedView;
