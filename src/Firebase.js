// import firebase from "firebase";
// import firebase from "firebase/compat/app"
// import firebase from "firebase/compat/auth";
// import firebase from "firebase/compat/firestore";
import {firebase} from "@firebase/app"
import '@firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAoNVthKIiVm3avZz5w41Z38eutRkAbAF0",
  authDomain: "clone-b4965.firebaseapp.com",
  projectId: "clone-b4965",
  storageBucket: "clone-b4965.appspot.com",
  messagingSenderId: "516126662223",
  appId: "1:516126662223:web:3d204ce940b291d14d543a",
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
