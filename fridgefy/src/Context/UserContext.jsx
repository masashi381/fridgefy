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
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    const googleLogOut = () => {
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("user", currentUser)
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



