const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const bodyParser=require('body-parser')


require('dotenv').config();

const app = express()
const port = process.env.port || 5000

app.use(bodyParser.urlencoded(true))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())




const uri=process.env.ATLAS_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  console.log('log')
});

app.get('/', (req, res) => {
  
  res.send(uri)
})
const booksRouter=require('./routes/books.route')

app.use('/books',booksRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
} )