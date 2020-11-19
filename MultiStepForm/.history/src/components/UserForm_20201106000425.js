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
     
    switch (step){
        case 1:
           return (<userConsumer><Page1 hello={hello}/></userConsumer>)
        case 2:
          return (<Page2/>)
        case 3:
          return (<Confirm/>)
        case 4:
          return (<Submit/>)
   
      }
}

export default UserForm
