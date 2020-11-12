import React, { useState } from 'react'

function Contact() {
    const [data, setData]=useState({
        name: "",
        email:"",
        age:"",
        msg:"",
    });

    const onChangeVal = (e) => {
        fills.name : setFills(e.target.value)
    }
    {console.log(fills.name)}


     var {name,age,email,message}=data;
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
