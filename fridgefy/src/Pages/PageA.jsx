import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { User } from "../Context/UserContext"


function PageA(props) {

    const { googleSignIn, googleLogOut, user } = useContext(User)

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn()
        } catch(e){
            console.log(e);
        }
        console.log("EVENT");
    }

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
            <button onClick={handleGoogleSignIn}>LOGIN</button>
            <button onClick={handleGoogleLogOut}>LOGOUT</button>
            
        </div>
        <Link to={"/"} relative='path'>App</Link>
        </>
    );
}

export default PageA;