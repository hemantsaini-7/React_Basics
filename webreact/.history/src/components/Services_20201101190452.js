import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpeg'
import img2 from '../images/2.jpg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpeg'


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
                <h2>CARD-2</h2>
                <img src={img2} alt=""/>
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
