import React,{ Fragment} from 'react'

function Common(props) {
    return (
        <Fragment>
            <div className="container">
                <div className="left">
                    <h1 className="head">{props.name}</h1>
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

export default Common
