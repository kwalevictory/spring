import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCLS7UmxOyZ8gCZPlvbQbBw5hAQVmEa0ew",
    authDomain: "spring-833d5.firebaseapp.com",
    databaseURL: "https://spring-833d5.firebaseio.com",
    projectId: "spring-833d5",
    storageBucket: "spring-833d5.appspot.com",
    messagingSenderId: "813013705765",
    appId: "1:813013705765:web:ec4b704f6ca424e6a0cbcc",
    measurementId: "G-5P547QJBMQ"
  };
const app = firebase.initializeApp(firebaseConfig)
 export const auth = app.auth()
 export const firestore = app.firestore()
 export const storage = app.storage()
 export  default app
