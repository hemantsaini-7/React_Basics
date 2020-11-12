import React from 'react'
import {Card} from './Card'


function Services() {
    return (
        <div className="s-container">
            <div className="card">
                <h2>CARD-1</h2>
                <img src={img1} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h2>CARD-2</h2>
                <img src={img2} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h2>CARD-3</h2>
                <img src={img3} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h2>CARD-4</h2>
                <img src={img4} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h2>CARD-5</h2>
                <img src={img5} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h2>CARD-6</h2>
                <img src={img6} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>   
        </div>
    )
}

export default Services
