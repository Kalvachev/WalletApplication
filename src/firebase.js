import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA1ABOLg11CYlKlhvQjSkiKa-ibNc8YIvw",
    authDomain: "wallettracker-75bf7.firebaseapp.com",
    projectId: "wallettracker-75bf7",
    storageBucket: "wallettracker-75bf7.appspot.com",
    messagingSenderId: "463827348176",
    appId: "1:463827348176:web:670f8b5473955014f40cd5",
    measurementId: "G-NVHYHB5JTZ"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default firebase;

export { database, auth, storage }