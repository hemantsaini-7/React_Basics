import React, { useState } from 'react'

function Contact() {
    const [values,setValues]=useState({
        name:"",
        age:"",
        email:"",
        message:"",
    });
    const {name,age,email,message}=values;

    const onChange =(e) =>{
        setValues([e.target.name] = e.target.values)
    }
    return (
        <form>
            <div className="form-div">
                <label htmlFor="Name">Name</label>
                <input type="text" className="input-field" value={name} name="name" onChange={onChange}/>
            </div>
            <div className="form-div">
                <label htmlFor="Age">Age</label>
                <input type="text" className="input-field" value={age} name="age"/>
            </div>
            <div className="form-div">
                <label htmlFor="Email">Email</label>
                <input type="text" className="input-field" value={email} name="email"/>
            </div>
            <div className="form-div">
                <label htmlFor="message">message</label>
                <input type="text" className="input-field" value={message} name="message"/>
            </div>
        </form>
    )
}

export default Contact
