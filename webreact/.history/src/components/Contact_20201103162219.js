import React, { useState } from 'react'

function Contact() {
    const [fills, setFills]=useState({name: ''});

    const onChangeVal = (e) => {
        fills.name = setFills(e.target.value)
    }

    // var {name,age,email,message}=values;
    return (
        <form>
            <div className="form-div">
                <label htmlFor="Name">Name</label>
                <input type="text" className="input-field" value={fills.name} name="name" onChange={onChangeVal}/>
                {console.log(fills.name)}
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
