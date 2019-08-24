import firebase from  'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyBr-z6POvohnG6ak2C24xmnjXWg7Yr-Tx8",
    authDomain: "crwn-db-cab3d.firebaseapp.com",
    databaseURL: "https://crwn-db-cab3d.firebaseio.com",
    projectId: "crwn-db-cab3d",
    storageBucket: "",
    messagingSenderId: "1005205603140",
    appId: "1:1005205603140:web:977f411290497cac"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//setting up google authenticification
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase