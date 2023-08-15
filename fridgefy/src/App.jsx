import FridgefyDiv from "./Components/Fridgefy.jsx";
import { Link } from "react-router-dom";


function App() {

  

  return (

    <>
      <FridgefyDiv/>
      <Link to={"/home"} relative="path">Home</Link>
    </>
    

  )
}

export default App
