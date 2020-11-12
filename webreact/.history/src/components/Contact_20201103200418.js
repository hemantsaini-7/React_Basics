import React, { useState } from 'react'

function Contact() {
    const [data, setData]=useState({
        name: "",
        email:"",
        age:"",
        msg:"",
    });

    var {name,age,email,msg}=data;

    const InputEvent =(e) =>{
        setData({...data, [e.target.name]:e.target.value});
    }
    const SubmitEvent = (e) =>{
        e.preventDefault();
        alert(`hello ${name} you are ${age} old, your email is ${email} and your message is ${msg}`);
    }

    return (
        <form onSubmit={SubmitEvent}>
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
                <input type="text" className="input-field" value={msg} name="message" onChange={InputEvent} />
            </div>
            <input type="submit" value="SUBMIT"/>
        </form>
    )
}

export default Contact
