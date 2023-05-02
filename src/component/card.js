import React from "react";
// import images from '../images/icon-luxury.svg';
import '../component/style.css'
import { useState } from "react";


function Card({color, title, subTitle , logo}){

    const [isHover, setHover] = useState(false)
    
    return(
        <div className="card" style={{backgroundColor:`${color}`}}>
            <div className="logo-img">
                <img src={logo}alt=""/>
            </div>
            <h1 className="title">
                {title}
            </h1>
            <p className="sub-title">
                {subTitle}
            </p>
            <button 
            onMouseEnter= {() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                color: isHover ? '#fff' : `${color}`,
                backgroundColor: isHover ? `${color}` : '#fff',
                }}>
                Learn More
            </button>
        </div>
    )
}

export default Card