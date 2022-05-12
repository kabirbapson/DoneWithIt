import React from 'react';
import {
    ImageBackground, StyleSheet, Image,
    Button, SafeAreaView, View, Text,
} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background}
            blurRadius={10} source={require('../image/couch.jpg')}>
            <View style={styles.logoContainer}>
                <Image source={require('../image/bapson.jpeg')} />
                <Text style={styles.textButton}>Sell What You Dont Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='login' />
                <AppButton title='Register' color='secondary' />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
    textButton: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '600',
        paddingVertical: 20
    },
})
export default WelcomeScreen;