import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function FetchData() {

const[data,setData]= useState([]);

useEffect(() => {
    axios.get()
})


    return (
       console.log(data)
    )
}

export default FetchData
