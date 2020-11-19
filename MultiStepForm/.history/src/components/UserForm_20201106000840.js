import React from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Confirm from './Confirm';
import Submit from './Submit';
import { Fragment } from 'react';
import {userConsumer} from './Context';



function UserForm() {

    const hello = (step) =>{
      step = step + 1;
      }
      return (
        <userConsumer>
          {console.log(`Helo ${value}`)}
        <Fragment>
        <Page1  hello={hello}/>
        <Page2/>
        </Fragment>
        </userConsumer>
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
