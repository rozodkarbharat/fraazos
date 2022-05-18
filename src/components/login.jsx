import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'
import "./css/App.css"

const Login = () => {
    const {login,token,handlechange,handleclick}=useContext(AuthContext)
const navigate=useNavigate()
const location=useLocation()


// const from=location.state.from.pathname|| ""

 useEffect(() => {
  if(token){

    navigate("/")
  }
 }, [token])

  return (


    <div className='logindiv'>
          <div>  <h2>Login</h2></div>
       <form onSubmit={handleclick}>
      <div>
         <input onChange={handlechange} type="text" placeholder='Email' id='email'></input>
      </div>
       <div >
           <input onChange={handlechange}  type="text" placeholder='password' id="password"></input>
       </div>
   <input className='submitbutton' type="submit"></input>
 </form>
    
    </div>
  )
}

export default Login
