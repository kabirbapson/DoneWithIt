import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';


function ViewImage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' size={30} color='white' />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' size={30} color='white' />
            </View>
            <Image resizeMode='contain' style={styles.image} source={require('../image/bgimg.jpeg')} />
        </View>
    )

}
const styles = StyleSheet.create({
    closeIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
export default ViewImage;