import {
  StyleSheet, Text, View, Image, SafeAreaView,
  TouchableWithoutFeedback, TouchableOpacity,
  TouchableHighlight, TouchableNativeFeedback,
  Button, Alert,
  Platform, StatusBar,
} from 'react-native';

export default function App() {
  console.log('App Executed')
  const handlePress = () => console.log('text clicked')
  console.log(require('./assets/bappipp.jpeg'))
  return (
    <SafeAreaView style={[styles.container, mybgcolor]}>
      {/* <Text numberOfLines={1} onPress={handlePress}>Hicome here my people Hi come here my people Hi come here my people Hi come here my people</Text> */}
      {/* <Image loadingIndicatorSource={1} source={require('./assets/bappipp.jpeg')}/> */}
      {/* <TouchableOpacity onPress={() => console.log('Image Clicked')}>
        <Image
          // blurRadius={1}  loadingIndicatorSource={11}
          source={{
            width: 200, height: 300,
            uri: 'https://picsum.photos/200/300'
          }} />
      </TouchableOpacity> */}
      <Button
        color='orange'
        title='Click Me'
      // onPress={() => Alert.prompt('MyText', 'MyMessage', text => console.log(text))}
      // onPress={() => alert('Alarm Pressed')}
      // onPress={() => Alert.alert('My Title', 'My Messages',
      //   [
      //     { text: 'Yes!', onPress: () => console.log('Yes oh') },
      //     { text: 'No!', onPress: () => console.log('No oh') }
      //   ]
      // )}
      />
    </SafeAreaView >
  );
}
//
const mybgcolor = { backgroundColor: 'green' }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // paddingTop: Platform.OS === 'ios' ? 30 : 10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
