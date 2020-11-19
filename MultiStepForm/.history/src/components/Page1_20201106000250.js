import React from 'react'
import { useState } from 'react';
import {userProvider} from './Context';

function Page1({hello}) {

   const [data,setData]= useState({
        step:1,
        fname: '',
        lname: '',
        email: '',
    });

    const {step,fname, lname, email} = data;

    const InputEvent = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    return (
        <userProvider value = {step}>
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
            <button onClick={()=>hello(step)}>Continue</button>
        </div>
        </userProvider>
    )
}

export default Page1
