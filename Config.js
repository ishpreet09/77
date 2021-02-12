import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDiwQaZRHpQoA4D-f-3sf2Nx3kVZ_qZdr8",
    authDomain: "c-77signupandlogin.firebaseapp.com",
    projectId: "c-77signupandlogin",
    storageBucket: "c-77signupandlogin.appspot.com",
    messagingSenderId: "720816979586",
    appId: "1:720816979586:web:8867bb60ec41fcc936be9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();