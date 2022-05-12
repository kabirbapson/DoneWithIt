import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors';

function AppButton({ title, onPress, color = 'primary' }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        // height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        margin: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
export default AppButton;