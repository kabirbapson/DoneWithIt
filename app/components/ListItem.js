import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, onPress }) {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <View>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 35
    },
    text: {
        fontWeight: '600',
    },
    subTitle: {
        color: colors.medium
    }
})
export default ListItem;