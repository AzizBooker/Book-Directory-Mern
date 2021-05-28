import { render } from '@testing-library/react'
import {useEffect,useState} from 'react'
import ApiCall from '../api/Api'
import BookCard from './BookCard'
const BookList =()=>{

    const [books,setBooks]=useState()

    useEffect(()=>{
        ApiCall()
        .then((res)=>{
            /* res=res.map((book)=>{
                <BookCard title={book.title} />
            })
            */
            
            return res
        })
        .then((res)=>{
           return res.map((book)=>{
               <BookCard title={book}/>
           }) 
          console.log(res)
         console.log(res[0])
         console.log(res[1])
         console.log(res[2])
        })
        .then((res)=>{
            console.log(res)
        })
     
        
       
      },[])
  
      return(
          <div>
              <h1>Books: </h1>
          </div>
      )
}

export default BookList;