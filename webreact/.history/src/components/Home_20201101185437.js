import React, { Fragment } from 'react'
import web from '../images/web.png'

function Home() {
    return (
        <Fragment>
            <div className="container">
                <div className="left">
                    <h1 className="head">We Are ROYALS !</h1>
                    <h3 className="head-2">The REBEL ROYALS...!</h3>
                    <p>The TagLINE</p>
                </div>
                <div className="right">
                    <img src={web} alt=""/>
                </div>
            </div>    
        </Fragment>
    )
}

export default Home
