import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';

function ListItem({ title, subTitle, image, ImageComponent: IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions} >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.text}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white'
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
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