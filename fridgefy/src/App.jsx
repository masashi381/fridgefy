import { useNavigate } from "react-router-dom";
import { User } from './Context/UserContext.jsx'
import { useContext, useEffect } from "react";
import HomePage from "./Pages/Home.jsx"


function App() {

  const { user } = useContext(User);
  const navigate = useNavigate()

    useEffect(()=>{
      if(user != null){
        navigate('/home')
      }
    },[
      user
    ])

  return (

      <>
      <HomePage/>
      </>      
       
  )
}

export default App
