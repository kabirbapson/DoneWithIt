import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants';


function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            <View>{children}</View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})
export default Screen;