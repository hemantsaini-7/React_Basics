import React from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Confirm from './Confirm';
import Submit from './Submit';


function UserForm() {

    const hello = (step) =>{
      step = step + 1;
      alert(`hello ${step}`);
      }
      return (
        <Page1  hello={hello}/>
      )
    // switch (step){
    //     case 1:
    //        return (<Page1 hello={hello}/>)
    //     case 2:
    //       return (<Page2/>)
    //     case 3:
    //       return (<Confirm/>)
    //     case 4:
    //       return (<Submit/>)
   
    //   }
}

export default UserForm
