import axios from 'axios'

async function ApiCall(arg){
    let books ={};
    
    
    const response =await axios.get('http://localhost:5000/books')
      .then( (res)=>{
        
          return res.data
        
      }).
      then((res)=>{
          console.log(res)
          return res
      })
      .catch((err)=>console.log(err))
 
      return await response

    }

export default ApiCall