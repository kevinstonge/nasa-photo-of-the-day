import React from "react";
import "./Background.scss";

const Background = () => {
    //stars is array of dom elements with random positions
    const stars = new Array(150).fill(0).map(s=>{
        return({
        top: `${Math.random()*100}vh`,
        left: `${Math.random()*100}vw`,
        animationDelay: `-${Math.floor(Math.random()*30)}s`,
        })
    });
    return(
        <div>
        {stars.map((e,i)=>
            <div 
                className="star"
                key={`star${i}`}
                style={{top:e.top, left:e.left, animationDelay:e.animationDelay}}    
            >

            </div>
        )
        }   
        </div>
    )
}
export default Background;