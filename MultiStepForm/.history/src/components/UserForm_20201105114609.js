import React from 'react'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
function UserForm() {
    switch (step){
        case 1:
           return (<Page1/>)
        case 2:
          return (<Page2/>)
        case 3:
            <h1>Confirm</h1>
        case 4:
            <h1>Submit</h1>    
      }
}

export default UserForm
