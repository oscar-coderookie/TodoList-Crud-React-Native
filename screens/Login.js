import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

const LoginScreen = () => {
    const state = {
        email: "",
        password: "",
        errorMessage: null
    }

    const handleLogin = () => {
        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }
    return ( 
        <ScrollView style={styles.createContainer}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email" 
        onChangeText={email => this.setState({email})}
        value={this.state.email} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={ password => this.setState({password})}
        value={this.state.password} />
      </View>
     
      <View style={styles.buttonGroup}>
        
        <TouchableOpacity 
        style={styles.btnLogin}
        onPress={() => handleLogin()}>
            <Text style={styles.btnText}>Login</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignup}>
            <Text style={styles.btnText}>Signup</Text> 
        </TouchableOpacity>
      </View>
    </ScrollView>
     );
}
const styles = StyleSheet.create({
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomColor: "#cccccc",
      borderBottomWidth: 1,
    },
    createContainer: {
      padding: 35,
      flex: 1,
    },
    buttonGroup: {
        height: 'auto'
    },
    btnLogin: {
        backgroundColor: '#4287f5',
        padding: 14,
        borderRadius: 6,
        marginVertical: 10
    },
    btnText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        letterSpacing: 3,
        
    },
    btnSignup: {
        backgroundColor: '#f5792c',
        padding: 14,
        borderRadius: 6,
    }
    
  });
 
export default LoginScreen;