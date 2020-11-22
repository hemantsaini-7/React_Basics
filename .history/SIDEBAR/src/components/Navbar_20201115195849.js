import React from 'react'
import { useState } from 'react'

function Navbar() {
    const [click,setClick]=useState(false);

    const ClickHandler =(click)=>{ 
        if(click){
            alert('YES')
        }
        else{
            alert('NO')
        }
    }

    return (
        <nav>
            <span onClick={ClickHandler(click)}>$$$</span>
        </nav>
    )
}

export default Navbar
