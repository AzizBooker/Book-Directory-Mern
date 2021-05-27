import axios from 'axios'

async function ApiCall(arg){
    let books ={};
    
    
    const response =await axios.get('http://localhost:5000/books')
      .then( (res)=>{
          console.log(res.data)
          return res.data
        
      }).
      then((res)=>{
          return res
      })
      .catch((err)=>console.log(err))
 
      return await response

    }

export default ApiCall