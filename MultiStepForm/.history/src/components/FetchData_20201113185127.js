import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function FetchData() {
    
    const[data,setData]= useState([]);
    
    
    //ye tera waala
    useEffect(async () => {
    const res= await axios.get('https://www.upbringo.com/api/assignment/football/?state=Maharashtra&nextPageToken=0')
    console.log(res.data);
},[]) 


//ye bhi kar sakta hai
useEffect(() => {
        axios.get('https://www.upbringo.com/api/assignment/football/?state=Maharashtra&nextPageToken=0')
            .then(response =>{
                    console.log(response.data)
                });
        },[]) 
        
        
        
        
            return (
                  <div>
          helo
      </div>
    )
}

export default FetchData

// import React, { Component } from 'react'
// import axios from 'axios'

// class FetchData extends Component {
// async componentDidMount(){
//     const res= await axios.get('https://www.upbringo.com/api/assignment/football/?state=Maharashtra')
//     console.log(res.data);
//     }

//     render() {
//         return (
//             <div>
//                 Hi
//             </div>
//         )
//     }
// }

// export default FetchData
