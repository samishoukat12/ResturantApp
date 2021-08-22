import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyDILoZgF47xFhOuZgY4WpSe9M7MVSKL76k",
    authDomain: "resturentapp-8b2c6.firebaseapp.com",
    projectId: "resturentapp-8b2c6",
    storageBucket: "resturentapp-8b2c6.appspot.com",
    messagingSenderId: "806322885360",
    appId: "1:806322885360:web:3a4115f393fd62d9e62835",
    measurementId: "G-CRCK83HM5Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const Firebase=firebase;
  export const storage = firebase.storage();