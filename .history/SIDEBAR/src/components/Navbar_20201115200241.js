import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    const [click,setClick]=useState(true);

    const ClickHandler =()=>{ 
        if(click){
            return <Sidebar />
        }
        else{
        }
    }

    return (
        <nav>
            <span onClick={ClickHandler}>$$$</span>
        </nav>
    )
}

export default Navbar
