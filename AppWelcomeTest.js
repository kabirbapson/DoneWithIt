import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { useDimensions } from '@react-native-community/hooks'
import AppButton from './app/components/AppButton'
import WelcomeScreen from './app/screens/WelcomeScreen'

export default function App() {
    console.log('first App Test Started')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgText} >
                <Image style={styles.imgLogo} source={require('./assets/img/menlmx.jpg')} />
                <Text >Sell What You Dont Need</Text>
            </View>
            <View >
                <Image style={styles.imgContainer} blurRadius={20} source={require('./app/image/bapson.jpeg')} />
            </View>
            {/* <AppButton title='login' onPress={() => console.log("Tapped")} /> */}
            <View style={styles.lastView}>
                <View style={styles.lastView2} />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    imgText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontStyle: 'italic',
    },
    imgLogo: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    imgContainer: {
        width: 375,
        height: 350
    },
    lastView: {
        flex: 1,
        flexDirection: 'row'
    },
    lastView2: {
        backgroundColor: 'orange',
        width: '100%',
        borderRadius: 25
        // height: 100

    }

})