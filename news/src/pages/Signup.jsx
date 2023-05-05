import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from "../db.json"
function Signup() {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[place,setPlace]=useState("")
const handelsubmit=()=>{
    console.log(email);
    console.log(password);
    console.log(place);
    console.log(data.user);
    data.user.push({
     email,
     password,
     place   
    })
    console.log(data.user);
    navigate("/signin")
}
  return (
    <div>
        <input placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder='Enter Password ' onChange={(e)=>{setPassword(e.target.value)}}/>
        <input placeholder='Enter Place' onChange={(e)=>{setPlace(e.target.value)}}/>
        <button onClick={handelsubmit}>Submit</button>
        <br/>
        Already have an account.<p onClick={()=>{navigate("/signin")}} style={{cursor:"pointer"}}>Click Here</p>
    </div>
  )
}

export default Signup