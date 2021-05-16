const express = require('express')
const cors=require('cors')
const moongose=require('moongose')

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const booksRouter=require('./routes/books.route')

app.use('/books',booksRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
} )