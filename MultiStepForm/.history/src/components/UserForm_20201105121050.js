import React from 'react'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Confirm from './components/Confirm';
import Submit from './components/Submit';


function UserForm() {

    const hello = (step) =>{
        step = step + 1;
    }
    const step=1;
    switch (step){
        case 1:
           return (<Page1 hello={hello}/>)
        case 2:
          return (<Page2/>)
        case 3:
          return (<Confirm/>)
        case 4:
          return (<Submit/>)
   
      }
}

export default UserForm
