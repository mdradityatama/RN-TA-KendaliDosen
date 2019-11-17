import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'react-native-gesture-handler';


import Home from "./scr/screen/Home.js";


var firebaseConfig = {
    apiKey: "AIzaSyDtvsI7BnGukE_wUThiiVTQHRB3WH1YGX0",
    authDomain: "pejuang-mahasiswa.firebaseapp.com",
    databaseURL: "https://pejuang-mahasiswa.firebaseio.com",
    projectId: "pejuang-mahasiswa",
    storageBucket: "pejuang-mahasiswa.appspot.com",
    messagingSenderId: "1024899497258",
    appId: "1:1024899497258:web:d855c4fece1e43fcef3253",
    measurementId: "G-PSZH4D4PGP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {
    return(
      <Home />
      );
  }
}
