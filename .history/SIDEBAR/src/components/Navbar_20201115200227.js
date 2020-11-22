import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    const [click,setClick]=useState(true);

    const ClickHandler =()=>{ 
        if(click){
            <Sidebar />
        }
        else{
           <Sidebar />
        }
    }

    return (
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>
    )
}

export default Navbar
