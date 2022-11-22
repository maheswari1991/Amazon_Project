// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCSmZu5qeZXGC8VDTqN8iAb8kv9LoCqtkM",
    authDomain: "app-e4ca0.firebaseapp.com",
    databaseURL: "https://app-e4ca0.firebaseio.com",
    projectId: "app-e4ca0",
    storageBucket: "app-e4ca0.appspot.com",
    messagingSenderId: "689675238279",
    appId: "1:689675238279:web:4dbf605b62a3506b9ef122",
    measurementId: "G-Y9815R0D6Z"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {db, auth}