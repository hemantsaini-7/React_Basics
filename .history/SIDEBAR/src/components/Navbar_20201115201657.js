import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    const [click,setClick]=useState(true);

const ClickHandler=()=>{
    setClick(!click);
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
