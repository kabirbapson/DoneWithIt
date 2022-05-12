import React from 'react';
import { View, FlatList, StyleSheet, } from 'react-native'
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../image/bappipp.jpeg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../image/bappipp.jpeg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D4',
        image: require('../image/bappipp.jpeg')
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Pressed', item)}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
            />

        </Screen>
    );
}
const styles = StyleSheet.create({

})
export default MessagesScreen;