import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { User } from "../Context/UserContext"


function PageA(props) {

    const { googleSignIn, googleLogOut, user } = useContext(User)



    const handleGoogleLogOut = async () => {
        try{
            await googleLogOut()
        } catch(e){
            console.log(e);
        }
    }


    return (
        <>
        <div>
            <h1>Hello: {user?.displayName}</h1>
            <button onClick={handleGoogleLogOut}>LOGOUT</button>
            
        </div>
        
        </>
    );
}

export default PageA;