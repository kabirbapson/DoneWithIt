import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import defaultStyles from "../config/text";
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
