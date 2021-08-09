import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

import firebase from "../database/firebase";

const CreateUser = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const addNewUser = async () => {
    if (state.name === "") {
      alert("Please provide a name");
    } else {
      await firebase.db.collection('users').add({
        name: state.name,
        email: state.email,
        phone: state.phone,
      });
      props.navigation.navigate('UserList')
    }
  };

  return (
    <ScrollView style={styles.createContainer}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText("name", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText("email", value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText("phone", value)} />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Create User" onPress={() => addNewUser()} />
      </View>
    </ScrollView>
  );
};

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
});

export default CreateUser;
