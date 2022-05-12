import { Dimensions, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
    console.log(Dimensions.get('window'))
    console.log('first')
    console.log(useDimensions())
    console.log('2nd ')
    console.log(useDeviceOrientation())
    return (
        <SafeAreaView >
            <View style={
                {
                    backgroundColor: 'red',
                    height: 70,
                    width: '50%',
                    borderRadius: 10
                }
            }>
                <Text style={{ textAlign: 'center' }}>App</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})