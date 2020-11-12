import React, { useState } from 'react'

function Contact() {
    const [data, setData]=useState({
        name: "",
        email:"",
        age:"",
        msg:"",
    });

    var {name,age,email,message}=data;

    const InputEvent =(e) =>{
        setData({[e.target.name]:e.target.value});
    }

    return (
        <form>
            <div className="form-div">
                <label htmlFor="Name">Name</label>
                <input type="text" className="input-field" value={name} name="name" onChange={InputEvent}/>
            </div>
            <div className="form-div">
                <label htmlFor="Age">Age</label>
                <input type="text" className="input-field" value={age} name="age" onChange={InputEvent} />
            </div>
            <div className="form-div">
                <label htmlFor="Email">Email</label>
                <input type="text" className="input-field" value={email} name="email" onChange={InputEvent} />
            </div>
            <div className="form-div">
                <label htmlFor="message">message</label>
                <input type="text" className="input-field" value={message} name="message" onChange={InputEvent} />
            </div>
        </form>
    )
}

export default Contact
