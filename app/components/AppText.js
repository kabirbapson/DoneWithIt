import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native'
import defaultStyles from '../config/text'
function AppText({ children, style }) {
    return (
        <Text style={[defaultStyles.text, style]}>{children}</Text>
    );
}

export default AppText;