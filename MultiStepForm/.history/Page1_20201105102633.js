import React from 'react'
import { useState } from 'react'

function Page1() {

   const [data,setData]= useState[{
        fname: '',
        lname: '',
        email: '',
    }]

    const {fname, lname, email} = data;
    return (
        <div className="container">
            <div className="input-div">
                <label htmlFor="">First Name :</label>
                <input type="text" value={fname} onChange={InputEvent} name="fname"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Last Name :</label>
                <input type="text" value={lname} onChange={InputEvent} name="lname"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Email :</label>
                <input type="text" value={email} onChange={InputEvent} name="email"/>
            </div>
        </div>
    )
}

export default Page1
