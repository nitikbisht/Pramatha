import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate();
    const token=JSON.parse(localStorage.getItem("token"))||""
  return (
    <div>
        <div>
            <section style={{padding:"20px",justifyContent:"space-between",display:"flex"}}>
            <img width={"150px"} onClick={()=>{navigate("/")}} style={{marginLeft:"12px"}} src='https://th.bing.com/th/id/R.5bc4a58b48da95d0b4f9c2141d664e89?rik=a6AI933hdtALIg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flogopedia%2fimages%2f7%2f75%2fGoogle_News_2015.png%2frevision%2flatest%2fscale-to-width-down%2f2000%3fcb%3d20160220081235&ehk=3q3GwDBeUaQo9rLhTbDT4yeOjO9fI3XdZmr9mm24SM4%3d&risl=&pid=ImgRaw&r=0' alt='Google news'/>
            {token.length>1?
                    // <div style={{marginLeft:"60px",width:"350px",backgroundColor:"aqua"}}>
                    // <img width={"50px"} style={{marginRight:"10px",borderRadius:"50%"}} src='https://th.bing.com/th/id/R.5bc4a58b48da95d0b4f9c2141d664e89?rik=a6AI933hdtALIg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flogopedia%2fimages%2f7%2f75%2fGoogle_News_2015.png%2frevision%2flatest%2fscale-to-width-down%2f2000%3fcb%3d20160220081235&ehk=3q3GwDBeUaQo9rLhTbDT4yeOjO9fI3XdZmr9mm24SM4%3d&risl=&pid=ImgRaw&r=0' alt='Avatar Logo'/>
            
                    // </div>
                    
                    <div style={{marginLeft:"60px",width:"350px"}}>
                        <button onClick={()=>{localStorage.removeItem("token")
                    window.location.reload()}} >Logout</button>
                    </div>
                    :
                    <div style={{marginLeft:"60px",width:"350px"}}>
                        <button onClick={()=>{navigate("/signin")}} >Signin</button>
                    </div>
                    
                }
            </section>
            <section style={{paddingLeft:"50px",paddingRight:"50px",justifyContent:"space-between",display:"flex",width:"80%",margin:"auto"}}>
                <section style={{width:"30%",borderRight:"px solid grey",display:"flex",justifyContent:"space-around",cursor:"pointer"}}>
                    <span onClick={()=>{navigate("/")}}>Home</span>
                    <span onClick={()=>{navigate("/you")}}>For You</span>
                    <span onClick={()=>{navigate("/show")}}>News Showcase</span>
                    
                </section>
                
                <section style={{width:"70%",display:"flex",justifyContent:"space-around",borderLeft:"2px solid black",cursor:"pointer"}}>
                    <span onClick={()=>{navigate("/india")}}>India</span>
                    <span onClick={()=>{navigate("/world")}}>World</span>
                    <span onClick={()=>{navigate("/local")}}>Local</span>
                    <span onClick={()=>{navigate("/business")}}>Business</span>
                    {/* <span>Technology</span>
                    <span>Entertainment</span>
                    <span>Sports</span>
                    <span>Science</span>
                    <span>Health</span> */}
                </section>
            </section>
            <hr/>
        </div>
    </div>
  )
}

export default Navbar