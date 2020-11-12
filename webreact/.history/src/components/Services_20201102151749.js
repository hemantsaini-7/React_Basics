import React from 'react'
import {Card} from './Card'


function Services() {
    return (
        <div className="s-container">
            {Card.forEach(c => {
                <div className="card">
                <h2>{c.name}</h2>
                <img src={c.img} alt=""/>
                <p>{c.para}</p>
                <a href="/">Home</a>
            })}
      



            {/* <div className="card">
                <h2>CARD-1</h2>
                <img src={img1} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div> */}
        </div>
    )
}

export default Services
