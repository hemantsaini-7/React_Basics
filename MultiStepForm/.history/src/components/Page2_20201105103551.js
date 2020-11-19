import React from 'react'
import { useState } from 'react'

function Page1() {

   const [ndata,setnData]= useState[{
        occupation: '',
        city: '',
        bio: '',
    }]

    const {occupation, city, bio} = ndata;

    const InputEvent = (e) => {
        setnData({...ndata, [e.target.name]:e.target.value})
    }

    return (
        <div className="container">
            <div className="input-div">
                <label htmlFor="">First Name :</label>
                <input type="text" value={occupation} onChange={InputEvent} name="occupation"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Last Name :</label>
                <input type="text" value={city} onChange={InputEvent} name="city"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Bio :</label>
                <input type="text" value={bio} onChange={InputEvent} name="bio"/>
            </div>
        </div>
    )
}

export default Page1
