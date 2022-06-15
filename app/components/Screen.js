import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    // paddingLeft: 50
    // backgroundColor: 'yellow'
  },
  view: {
    flex: 1,
  },
});
export default Screen;
