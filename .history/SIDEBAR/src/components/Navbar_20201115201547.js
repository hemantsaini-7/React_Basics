import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    const [click,setClick]=useState(true);

const ClickHandler=()=>{
    setClick(!click);
}

    return (
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>
    )
}

export default Navbar
