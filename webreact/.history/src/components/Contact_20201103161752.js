import React, { useState } from 'react'

function Contact() {
    const [name,setName]=useState("");
    // var {name,age,email,message}=values;
    return (
        <form>
            <div className="form-div">
                <label htmlFor="Name">Name</label>
                <input type="text" className="input-field" value={name} name="name" onChange={e=>setName(e.target.value)}/>
                {console.log(name)}
            </div>
            {/* <div className="form-div">
                <label htmlFor="Age">Age</label>
                <input type="text" className="input-field" value={age} name="age" />
            </div>
            <div className="form-div">
                <label htmlFor="Email">Email</label>
                <input type="text" className="input-field" value={email} name="email" />
            </div>
            <div className="form-div">
                <label htmlFor="message">message</label>
                <input type="text" className="input-field" value={message} name="message" />
            </div> */}
        </form>
    )
}

export default Contact
