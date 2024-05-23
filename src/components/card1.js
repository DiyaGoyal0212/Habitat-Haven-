import React from "react";
import '../App.css'






export default function Card1(props){
    return (
       
            <div className={"card1"}>
                
            <div className="im2">
            <img className="im" src={props.img} alt="image231" />
            </div>
            <div className="text1">
            <h4>{props.head}</h4>
            <p>{props.line}</p>
            </div>
            </div>

       

    )
}