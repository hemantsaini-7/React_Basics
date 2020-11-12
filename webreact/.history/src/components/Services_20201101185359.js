import React from 'react'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'


function Services() {
    return (
        <div className="s-container">
            <div className="card">
                <h1 className="card-head">CARD-1</h1>
                <img src={img1} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h1 className="card-head">CARD-2</h1>
                <img src={img2} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h1 className="card-head">CARD-3</h1>
                <img src={img3} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h1 className="card-head">CARD-4</h1>
                <img src={img4} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h1 className="card-head">CARD-5</h1>
                <img src={img5} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>
            <div className="card">
                <h1 className="card-head">CARD-6</h1>
                <img src={img6} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, omnis.</p>
                <a href="/">Home</a>
            </div>   
        </div>
    )
}

export default Services
