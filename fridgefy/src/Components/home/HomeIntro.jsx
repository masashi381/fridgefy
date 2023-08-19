import React, { useContext, useEffect } from 'react';
import styled from "styled-components";
import { User } from "../../Context/UserContext"
import { Link, useNavigate } from "react-router-dom";

export default function HomeIntro() {

  
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/recipes')
  }


  const {user} = useContext(User)
  return (
    <Div>
      <P>Welcome to Fridgefy - your ultimate destination for culinary inspiration!
        Whether you're a seasoned chef or a novice in the kitchen, we're here to make your cooking journey delightful and flavorful.
        Our extensive collection of recipes caters to all tastes and dietary preferences, ensuring that you'll find something to excite your taste buds. 
        From quick and easy weeknight dinners to show-stopping desserts, we've got you covered. 
        Join us in exploring the art of cooking as we embark on a flavorful adventure together!
      </P>
      
      {user != null ? <button onClick={handleclick}>Recipes</button> : <H2>Please log in to start!</H2>}
    </Div>
  )
};

const Div = styled.div`
  width: 50vw;
`;

const P = styled.p`
  width: 80%;
  margin: 0 auto;
`;

const H2 = styled.h2`
  width: 80%;
  margin: 1opx auto;
  text-align: center;
`
