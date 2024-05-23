import React from 'react'
import './image.css'

function Card(props){
    return(
      <>
      <div className="container" id="c">
        <div className="img1">
          <img src={props.img} alt="dinning room" className='card' />
        </div>
        <div className="text">
          <h2>{props.text} </h2>
        </div>
      </div>
    </>
    )
}

export default Card
