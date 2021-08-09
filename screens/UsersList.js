import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "../database/firebase";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button title="Create User" onPress={() => props.navigation.navigate("CreateUser")} />

      {users.map((user) => {
        return (
          <ListItem key={user.id} bottomDivider onPress={() => props.navigation.navigate('UserDetail', {
              userId : user.id
          })}>
            <ListItem.Chevron />
            <Avatar source={{ uri: "http://www.w3bai.com/w3css/img_avatar3.png" }} rounded />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
