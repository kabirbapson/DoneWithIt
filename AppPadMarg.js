import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey'
        }}>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                padding: 10,
                paddingHorizontal: 20,
                paddingLeft: 30,
            }}>
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'gold '
                }}
                >
                </View>

            </View>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: 'tomato',
                margin: 20
            }}></View>
        </View>
    )
}


