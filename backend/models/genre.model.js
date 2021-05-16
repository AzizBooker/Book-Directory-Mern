const moongose=require("moongose")

const Schema=moongose.Schema

const genreSchema=new Schema({
   name:{
       type: String,
       required: true,
   },
   isNonFiction:{
    type:Boolean,
    required: true
   }

},
{

})

const Book=moongose.model('Book',bookSchema)

module.exports=Book;