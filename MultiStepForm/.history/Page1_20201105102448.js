import React from 'react'

function Page1() {
    return (
        <div className="container">
            <div className="input-div">
                <label htmlFor="">First Name :</label>
                <input type="text" value={} onChange={InputEvent} name="fname"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Last Name :</label>
                <input type="text" value={} onChange={InputEvent} name="lname"/>
            </div>
            <div className="input-div">
                <label htmlFor="">Email :</label>
                <input type="text" value={} onChange={InputEvent} name="email"/>
            </div>
        </div>
    )
}

export default Page1
