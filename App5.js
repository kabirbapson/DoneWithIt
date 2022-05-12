import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import AppText from './app/components/AppText'


export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AppText>Helloooo my love family</AppText>
            <MaterialCommunityIcons name='email' size={60} color={'blue'} />
        </View>
    )
}

const styles = StyleSheet.create({})