import React from 'react';
import styled from "styled-components";

export default function HomeIntro() {
  return (
    <Div>
      <P>Welcome to [Your Recipe Search Site] - your ultimate destination for culinary inspiration!
        Whether you're a seasoned chef or a novice in the kitchen, we're here to make your cooking journey delightful and flavorful.
        Our extensive collection of recipes caters to all tastes and dietary preferences, ensuring that you'll find something to excite your taste buds. 
        From quick and easy weeknight dinners to show-stopping desserts, we've got you covered. 
        Join us in exploring the art of cooking as we embark on a flavorful adventure together!
      </P>
      <H2>Please log in to start!</H2>
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
