import { createContext, useContext, useEffect, useState } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import { auth } from "../firebase"

export const User = createContext();

export function UserContext({ children }) {
    const [user, setUser] = useState({})


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        // signInWithRedirect(auth, provider)
    }

    const googleLogOut = () => {
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () => {
            unsubscribe
        }
    },[])

    return (

        
        <User.Provider value={{ googleSignIn, googleLogOut, user }}>
            {children}
        </User.Provider>
    )
}



