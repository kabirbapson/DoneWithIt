import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../image/bappipp.jpeg")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
