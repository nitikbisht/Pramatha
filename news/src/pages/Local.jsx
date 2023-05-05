import React, { useEffect, useState } from 'react'
import Display from "../Components/Display"
import { useNavigate } from 'react-router-dom'
function Local() {
    const[state,setState]=useState([])
    let local=JSON.parse(localStorage.getItem("local"))||"india"
    if(local==undefined){
        local="india"
    }
    const token=JSON.parse(localStorage.getItem("token"))||""
    const navigate=useNavigate();
    const[signin,setSignin]=useState(token);
    if(!token){
        navigate("/signin")
    }
    useEffect(()=>{
        fetch(`https://gnews.io/api/v4/top-headlines?category=general&apikey=3bb0238d5c37a1c5a5287e9c230d4d03&lang=en&max=15&q=${local}`)
        .then((res)=>res.json())
        .then((data)=>setState(data.articles)
        )
        // console.log(state)
    },[])
  return (
    <div style={{width:"60%",cursor:"pointer"}}>
        <h3>LOCAL</h3>
        <div>
            {
                state.map((el,ind)=>{
                    return <Display data={el} key={ind+1}/>
                })
            }
        </div>
    </div>
  )
}

export default Local