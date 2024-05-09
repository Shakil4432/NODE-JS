import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/firebase.config';
export const authContext = createContext(null);

//provider
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        })
        return () => unSubscribe();
    }, [])

    const logOut = ()=>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    const allData = {
        googleSingIn,
        createUser,
        user,
        logOut,
    }

    
    return (
        <authContext.Provider value={allData}>
            {children}
        </authContext.Provider>
    )
}
