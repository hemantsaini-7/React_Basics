import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [click,setClick]=useState(false);

    const ClickHandler =()=>{ 
        alert('123');
    }

    return (
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>
    )
}

export default Navbar
