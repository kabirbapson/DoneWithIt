import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImage from './app/screens/ViewImage'

export default function App() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: 'blue',
                width: 100,
                height: 100,
                borderWidth: '10',
                borderColor: 'royalblue',
                borderRadius: 10,
                // borderTopWidth: 20,
                // borderTopLeftRadius: 50
                shadowColor: 'gold',
                shadowOpacity: 1,
                shadowOffset: { width: 10, height: 10 },
                shadowRadius: 10,

            }}>
            </View>
        </View>
        // <WelcomeScreen />
        // <ViewImage />
    )
}

const styles = StyleSheet.create({})