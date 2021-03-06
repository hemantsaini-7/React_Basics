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
      </div>
    )
}

export default Services
