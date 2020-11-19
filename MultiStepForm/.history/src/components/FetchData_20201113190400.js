import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function FetchData() {
    
    const[data,setData]= useState([]);
    
    useEffect(async () => {
        const res= await axios.get('https://www.upbringo.com/api/assignment/football/?state=Maharashtra&nextPageToken=0');
        setData(res.data);
    },[data]);        
        
    return (
        <div>
          {console.log('hello')}
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
