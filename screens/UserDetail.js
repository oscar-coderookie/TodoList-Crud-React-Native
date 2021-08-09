import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, TextInput, ScrollView, Button, StyleSheet, ActivityIndicator } from "react-native";

import firebase from "../database/firebase";

const UserDetail = (props) => {

    const INITIAL_STATE = {
        id: "",
        name: "",
        email: "",
        phone: "",
      }

  const [user, setUser] = useState(INITIAL_STATE);

  const [loading, setLoading] = useState(true);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false)
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, [] );

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteUser = async () => {
      const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
      await dbRef.delete();
      props.navigation.navigate('UserList')
  }

  const updateUser = async () => {
      const dbRef= firebase.db.collection('users').doc(user.id);
      await dbRef.set({
          name: user.name,
          email: user.email,
          phone: user.phone
      });
      setUser(INITIAL_STATE);
      props.navigation.navigate('UserList')
  }

  const openConfirmAlert = () => {
      Alert.alert('Remove the User', 'Are you Sure?', [
          {text: 'Yes', onPress: () => deleteUser()},
          {text: 'No', onPress: () => console.log(false)},
      ])
  }

  if (loading){
      return (
          <View>
              <ActivityIndicator size="large" color="#9e9e9e" />
          </View>
      )
  }

  return (
    <ScrollView style={styles.createContainer}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          value={user.name}
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangeText("email", value)}
          value={user.email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText("phone", value)}
          value={user.phone}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Update User" onPress={() => updateUser()} />
        <Button color="#e37399" title="Delete User" onPress={() => openConfirmAlert()} />
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

export default UserDetail;
