import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [click,setClick]=useState(false);
    return (
        <nav>
            <span onClick={setClick(!click)}>$$$</span>
        </nav>
    )
}

export default Navbar
