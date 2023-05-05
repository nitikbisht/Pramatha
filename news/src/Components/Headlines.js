import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Display from "./Display"
function Headlines() {
    const navigate=useNavigate();
    const[state,setState]=useState([])
    useEffect(()=>{
        fetch("https://gnews.io/api/v4/top-headlines?category=general&apikey=3bb0238d5c37a1c5a5287e9c230d4d03&lang=en&max=15")
        .then((res)=>res.json())
        .then((data)=>setState(data.articles)
        )
        console.log(state)
    },[])
  return (
    <div style={{width:"60%",cursor:"pointer"}}>
        <h3 onClick={()=>{navigate("/headline")}}>
            TOP STORIES {'>'}
        </h3>
        <hr/>
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

export default Headlines