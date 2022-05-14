import React from 'react';
import { StyleSheet } from 'react-native'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImage from './app/screens/ViewImage';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
function App(props) {
    return (
        <ListingScreen />
        // <AccountScreen />
        //  <Screen>
        //     <ListItem
        //         title={`Bapson  Dee`}
        //         subTitle={'Hello World'}
        //         ImageComponent={<Icon
        //             name='email'
        //         />}
        //     image={require('./app/image/bappipp.jpeg')}
        //     />
        // </Screen> 
        // <ListingDetailsScreen />
        // <ViewImage />
        // <MessagesScreen />
        // <Screen >
        //     <Icon
        //         name='email'
        // size={50}
        // backgroundColor='red'
        // iconColor='white'
        //     />
        // </Screen>
    );
}
const styles = StyleSheet.create({

})
export default App;