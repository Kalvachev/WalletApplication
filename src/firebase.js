import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig ={
    apiKey: "AIzaSyBlLboct0cr6qPbJQRSh8bYHtJKjT7emkM",
    authDomain: "wallet-application-4ad52.firebaseapp.com",
    projectId: "wallet-application-4ad52",
    storageBucket: "wallet-application-4ad52.appspot.com",
    messagingSenderId: "151394693748",
    appId: "1:151394693748:web:6f44374270afbb0690d721"
}

firebase.initializeApp(firebaseConfig)

export default firebase;