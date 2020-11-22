import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    const [sidebar,setsidebar]=useState(true);

const ClickHandler=()=>{
    setsidebar(!sidebar);
}

    return (
        <>
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>

        <div className="side-div">
            {sidebar ? "side-active" : "side-deactive"}
        </div>  
        </>
    )
}

export default Navbar
