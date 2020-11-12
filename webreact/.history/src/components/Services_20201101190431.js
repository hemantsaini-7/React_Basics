import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpeg'


function Services() {
    return (
        <div className="s-container">
            <div className="card">
                <h3>CARD-1</h3>
                <img src={img1} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h3>CARD-2</h3>
                <img src={img2} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h3>CARD-3</h3>
                <img src={img3} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h3>CARD-4</h3>
                <img src={img4} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h3>CARD-5</h3>
                <img src={img5} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h3>CARD-6</h3>
                <img src={img6} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>   
        </div>
    )
}

export default Services
