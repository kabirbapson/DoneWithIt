import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../image/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userWrapper}>
                    <ListItem
                        image={require('../image/bappipp.jpeg')}
                        title='Mosh Gatari'
                        subTitle='5 Listings'
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userWrapper: {
        marginVertical: 40
    }
})
export default ListingDetailsScreen;