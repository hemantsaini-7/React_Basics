import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    const [siderbar,setsiderbar]=useState(true);

const ClickHandler=()=>{
    setClick(!sidebar);
}

    return (
        <>
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>

        <div className="side-div">
            {siderbar ? "side-active" : "side-deactive"}
        </div>  
        </>
    )
}

export default Navbar
