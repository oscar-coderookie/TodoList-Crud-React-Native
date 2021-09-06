import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

const Loading = () => {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "UserList" : "Auth")
        })
    }
    return ( 
        <View>
            <Text>Loading....</Text>
            <ActivityIndicator size="large" />
        </View>
     );
}
 
export default Loading;