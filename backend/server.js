const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')


require('dotenv').config();

const app = express()
const port = process.env.port || 5000

app.use(bodyParser.urlencoded(true))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())




const uri=process.env.ATLAS_URI;


try {
  mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
  console.log("connected"));    
  }catch (error) { 
  console.log("could not connect");    
  }
app.get('/', (req, res) => {
  
  res.send("Hello")
})
const booksRouter=require('./routes/books.route')

app.use('/books',booksRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
} )