import React, { useState, useContext, useEffect } from 'react';
import firebase from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();



    function signUp(username, password) {
        firebase.auth().createUserWithEmailAndPassword(username, password)
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe;
    }, [])
    const value = {
        currentUser,
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}