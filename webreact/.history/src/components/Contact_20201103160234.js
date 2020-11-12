import React, { useState } from 'react'

function Contact() {
    const [values,setValues]=useState({
        name:"",
        age:"",
        email:"",
        message:"",
    })
    return (
        <form>
            <div className="form-div">
                <label htmlFor="Name">Name</label>
                <input type="text" className="input-field"/>
            </div>
        </form>
    )
}

export default Contact
