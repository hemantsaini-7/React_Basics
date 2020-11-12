import React, { useState } from 'react'

function Contact() {
    const [values,setValues]=useState({
        name:"",
        age:"",
        email:"",
        message:"",
    });
    return (
        <form>
            <div className="form-div">
                <label htmlFor="Name">Name</label>
                <input type="text" className="input-field" value={values.name}/>
            </div>
            <div className="form-div">
                <label htmlFor="Age">Age</label>
                <input type="text" className="input-field" value={values.age}/>
            </div>
            <div className="form-div">
                <label htmlFor="Email">Email</label>
                <input type="text" className="input-field" value={values.email}/>
            </div>
            <div className="form-div">
                <label htmlFor="message">message</label>
                <input type="text" className="input-field" value={values.message}/>
            </div>
        </form>
    )
}

export default Contact
