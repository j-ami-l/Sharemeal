import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';


const AuthContext = createContext()

const AuthProvider = ({children}) => {


    const provider = new GoogleAuthProvider()

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    
    
    const register = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const login = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email , password)
    }

    const logout = () =>{
        return signOut(auth)
    }

    const signIntWithGoogle = () =>{
        return signInWithPopup(auth , provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return unSubscribe
    } , [])



    const userInfo = {
        user,
        register , 
        login,
        loading,
        logout,
        signIntWithGoogle
    }



    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;