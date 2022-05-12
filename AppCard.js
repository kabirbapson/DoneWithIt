import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Card from './app/components/Card'

export default function App() {
    return (
        <View style={{
            backgroundColor: '#f8f4f4',
            padding: 50,
            paddingTop: 100,
        }}>
            <Card
                title='Red Jacker'
                subTitle='$100'
                image={require('./app/image/jacket.jpg')}
            >
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({})