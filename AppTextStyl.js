import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text style={{
                // fontFamily: 'Roboto',
                fontSize: 20,
                fontStyle: 'italic',
                fontWeight: '700', // 'bold'
                color: 'tomato',
                textDecorationLine: 'line-through',
                textTransform: 'capitalize',
                textAlign: 'center',
                lineHeight: 30

            }}>I love Lameen junior & his mom - they are  so cool & Lovely walai talai - i love you guys</Text>
        </View>
    )
}

const styles = StyleSheet.create({})