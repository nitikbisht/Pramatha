import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from "../db.json"
function Signin() {
    const navigate=useNavigate()
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    
const handelsubmit=()=>{
console.log(email);
console.log(password);
console.log(data.user);
data.user.map((el)=>{
if(el.email==email){
    if(el.password==password){
        localStorage.setItem("place",JSON.stringify(el.local))
        console.log(el);
        localStorage.setItem("token",JSON.stringify(el.email))
        navigate("/")
    }
}
})
}
  return (
    <div>
        <input placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder='Enter Password ' onChange={(e)=>{setPassword(e.target.value)}}/>
        
        <button onClick={handelsubmit}>Submit</button>
        <br/>
        Don't have an account.<p onClick={()=>{navigate("/signup")}}>Click Here</p>
    </div>
  )
}

export default Signin