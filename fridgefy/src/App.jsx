import FridgefyDiv from "./Components/Fridgefy.jsx";
import { Link, useNavigate } from "react-router-dom";
import { User } from './Context/UserContext.jsx'
import { useContext, useEffect } from "react";
import Header from "./Components/common/Header.jsx";


function App() {

  const { googleSignIn, user } = useContext(User);
  const navigate = useNavigate()

    useEffect(()=>{
      if(user != null){
        navigate('/home')
      }
    },[
      user
    ])

  return (

    
      <Header></Header>
    
    

  )
}

export default App
