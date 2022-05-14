import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Text, Switch } from 'react-native'
import AppTextInput from './app/components/AppTextInput.js';
import Screen from './app/components/Screen.js';

export default function App() {
    const [isNew, setIsNew] = useState(false)
    // const [firstName, setFirstName] = useState('')
    console.log(isNew);
    return (
        <View>
            <AppTextInput icon='email' placeholder='userame' />
            <Switch
                value={isNew}
                onValueChange={(newValue) => setIsNew(newValue)}
            />
        </View>

    );
}


 // <Screen>
        //     <Text>{firstName}</Text>
        //     <TextInput
        //         maxLength={5}
        //         // keyboardType={''}
        //         clearButtonMode={'always'}
        //         // secureTextEntry
        //         onChangeText={text => setFirstName(text)}
        //         style={{
        //             borderBottomWidth: 2, borderBottomColor: '#ccc'
        //         }} placeholder='Hello World' />
        // </Screen>
