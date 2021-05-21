const router=require('express').Router()
const { json } = require('body-parser')
const mongoose=require('mongoose')
const Book =require('../models/book.model')

router.route('/')
.get((req,res)=>{
    res.send('hello from books routesss')
})
.post((req,res)=>{
    const title=req.body.title
    const author=req.body.author
    const description=req.body.description
    const rating=req.body.rating

    const newBook=new Book({
        title,
        author,
        description,
        rating
    }
    )

    newBook.save()
    .then(()=>res.json('User Added'))
    .catch(err=>res.status(400))
})





module.exports=router;