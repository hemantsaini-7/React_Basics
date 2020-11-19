import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function FetchData() {

const[data,setData]= useState([]);

useEffect(() => {
    axios.get('https://documenter.getpostman.com/view/13163216/TVeiDWoh')
        .then(response =>{
            setData(response.data)
        })
})          


    return (
       console.log(data)
    )
}

export default FetchData
