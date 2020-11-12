import React from 'react'
import {Card} from './Card'

console.log(Card);

function Services() {
    return (
            {Card.forEach(c => (
                <div className="s-container">
                console.log(c.name);
                <div className="card">
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
