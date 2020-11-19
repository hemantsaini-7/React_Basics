import React from 'react'
import { useState } from 'react'

function Page1() {

   const [ndata,setnData]= useState({
        occupation: '',
        city: '',
        bio: '',
    });

    const {occupation, city, bio} = ndata;

    const nInputEvent = (e) => {
        setnData({...ndata, [e.target.name]:e.target.value})
    }

    return (
        <div className="container">
            <div className="input-div">
                <label htmlFor="">Occupation :</label>
                <input type="text" value={occupation} onChange={nInputEvent} name="occupation"/>
            </div>
            <div className="input-div">
                <label htmlFor="">City :</label>
                <input type="text" value={city} onChange={nInputEvent} name="city"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Bio :</label>
                <input type="text" value={bio} onChange={nInputEvent} name="bio"/>
            </div>
        </div>
    )
}

export default Page1
