import React , { useContext } from 'react';
import { User } from '../../Context/UserContext'
import { Link } from 'react-router-dom'


function Header(props) {
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

    if(!user){
        return (
            <>
            <div>Make your login, please:</div>
            <button onClick={handleGoogleSignIn}>LOGIN</button>
            </>

        )
    }

    return(
        <>
        <div>Hi, {user.displayName}</div>
        <div>Make your logOut:</div>
        <button onClick={handleGoogleLogOut}>LOGOUT</button>
        <div>

        <Link to="/home" relative='path'>Home</Link>
        <Link to="/recipes" relative='path'>Recipes</Link>
        <Link to="/shoppingList" relative='path'>Shopping List</Link>
        </div>
        </>
    )
    
}

export default Header;