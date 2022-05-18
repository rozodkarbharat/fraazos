"@testing-library/react";
import { createContext, useState } from "react";

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
const [token,settoken]=useState("")
const [mydata,setdata]=useState({})
const [logindata,setlogindata]=useState()
console.log(logindata)


const handlechange=(e)=>{
console.log(e.target.id)
if(e.target.id==="email"){
setdata({...mydata,
  "email":e.target.value

})
}
if(e.target.id==="password"){
setdata({...mydata,
  "password":e.target.value

})
}

}
const handleclick=(e)=>{
  e.preventDefault()
  setlogindata(mydata)


setdata({})
}

const login=async()=>{

    let r=await fetch(`https://reqres.in/api/login`, {method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(logindata)
 })

    let data=await r.json()
settoken(data.token)


}
if(logindata){
    login()
}
const logout=()=>{
settoken("")
}

    return(
      <AuthContext.Provider value={{setdata,setlogindata,token,settoken,logout,login,handlechange,handleclick}}>
         {children} 
      </AuthContext.Provider>
    )
}