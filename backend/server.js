const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB datebase connection established successfully')
})

const booksRouter=require('./routes/books.route')

app.use('/books',booksRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
} )