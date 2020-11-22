import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [click,setClick]=useState(true);

    const ClickHandler =()=>{ 
        if(click){
            <Sidebar />
        }
        else{
            alert('NO')
        }
    }

    return (
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>
    )
}

export default Navbar
