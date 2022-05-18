import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'

const Requiredauth = ({children}) => {
    const {token}=useContext(AuthContext)
    const location=useLocation()


 const state=location.state

    if(token) return children;
    return <Navigate to="/" state={{from:location}} replace/>
   
     
}

export default Requiredauth
