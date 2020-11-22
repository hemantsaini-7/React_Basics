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

        <div className={sidebar ? "side-active" : "side-deactive"}>
            <ul>
                <span onClick={ClickHandler}>XXX</span>
                <li>Home</li>
                <li>Products</li>
                <li>Lists</li>
                <li>Lists</li>
                <li>Lists</li>
            </ul>
        </div>  
        </>
    )
}

export default Navbar
