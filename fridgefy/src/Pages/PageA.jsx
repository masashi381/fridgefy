import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { User } from "../Context/UserContext"
import Header from '../Components/common/Header';
import FridgefyDiv from '../Components/Fridgefy';


function PageA(props) {

    


    return (
        <>
        <div>
            <Header></Header>
            <FridgefyDiv></FridgefyDiv>
            
        </div>
        
        </>
    );
}

export default PageA;