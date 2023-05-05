import React, { useEffect, useState } from 'react'
import Headlines from '../Components/Headlines';
import Local from '../Components/Local';
import ForYou from '../Components/ForYou';
import { useNavigate } from 'react-router-dom';

function Home() {
    const token=JSON.parse(localStorage.getItem("token"))||""
    const navigate=useNavigate();
    const[signin,setSignin]=useState(token);
    
  return (
    <div>
        <h2>YOUR BRIEFING</h2>
        <section style={{display:"flex",padding:"50px",paddingLeft:"100px"}}>
            <Headlines/>
            <div>
                {token.length>1?""
                    // <div style={{marginLeft:"60px",width:"350px",backgroundColor:"aqua"}}>
                    // <Local/>
                    // <ForYou/>
                    // </div>
                    :
                    <div style={{marginLeft:"60px",width:"350px"}}>
                        <button onClick={()=>{navigate("/signin")}} >Signin</button>
                    </div>
                    
                }
            </div>
        </section>
            {/* <h2>YOUR TOPICS</h2>
        <section>

        </section>
        <h2>FOR YOU</h2>
        <section>

        </section> */}
        
    </div>
  )
}

export default Home