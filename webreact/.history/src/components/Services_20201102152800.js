import React from 'react'
import {Card} from './Card'

console.log(Card);

function Services() {
    return (
        <div className="s-container">
            {Card.map((c,index) => (
                <div className="card" key={index}>
                <h2>{c.name}</h2>
                {console.log(c.name)};
                <img src={c.img} alt=""/>
                <p>{c.para}</p>
                <a href="/">Home</a>
                </div>
            ))}
      </div>
    )
}

export default Services
