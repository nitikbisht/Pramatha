import React from 'react'

function Display({data}) {
    console.log(data);
    const{title,source,image,content,url,description}=data
  return (
    <div>
        <a href={url} style={{width:"100%",padding:"30px",margin:"5px",height:"150px",border:"1px solid grey",color:"black",textDecoration:"none",display:"flex"}}>
            <img src={image} style={{width:"150px"}}/>
            <div style={{display:"grid",padding:"15px"}}>
            <p>{source.name}</p>
            <p>{title}</p>
            </div>
        </a>

    </div>
  )
}

export default Display