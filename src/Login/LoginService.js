import firebase from "../firebase";

export const loginWithCredentials = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
}
