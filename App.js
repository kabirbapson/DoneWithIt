import React from 'react';
import { View, SafeAreaView, TextInput, Text, Switch } from 'react-native'
import AppPicker from './app/components/AppPicker.js';
import AppTextInput from './app/components/AppTextInput.js';
import AppPicker from './app/components/AppPicker.js';
import AppText from './app/components/AppText.js';
export default function App() {
    return (
        <Screen>

            <AppPicker />
            <AppTextInput />
        </Screen>
    );
}

