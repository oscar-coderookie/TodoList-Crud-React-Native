import firebase from 'firebase';

import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBWXsx_CF-Z9Jd8CZMltnQikwIKUwgdrKc",
    authDomain: "todolist-e60e2.firebaseapp.com",
    projectId: "todolist-e60e2",
    storageBucket: "todolist-e60e2.appspot.com",
    messagingSenderId: "162317471644",
    appId: "1:162317471644:web:61ecc91c660e9ab003c259"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db

  }