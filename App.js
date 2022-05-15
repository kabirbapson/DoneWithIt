import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Text, Switch } from 'react-native'
import AppTextInput from './app/components/AppTextInput.js';
import AppPicker from './app/components/AppPicker.js';
import Screen from './app/components/Screen.js';
const categories = [
    { label: 'Furnitures', value: '1' },
    { label: 'Clothing', value: '2' },
    { label: 'Appliances', value: '3' },
];
export default function App() {
    const [category, setCategory] = useState(categories[0])

    return (
        <Screen>
            <AppPicker
                SelectedItem={category}
                onSelectItem={item => setCategory(item)}
                items={categories}
                icon={'apps'}
                placeholder={'Category'} />
            <AppTextInput icon={'email'} placeholder='Email' />
        </Screen>
    );
}

