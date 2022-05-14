import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
const listings = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../image/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../image/couch.jpg')
    }
]
function ListingScreen(props) {
    return (
        <Screen style={styles.screen} >
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
export default ListingScreen;