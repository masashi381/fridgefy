import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { User }from '../Context/UserContext'


function Protected({children}) {

    const { user } = useContext(User)

    if(!user) {
        return <Navigate to="/" />
    }

    return children
}

export default Protected;