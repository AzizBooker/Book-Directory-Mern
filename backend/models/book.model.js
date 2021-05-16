const moongose=require("moongose")

const Schema=moongose.Schema

const bookSchema=new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    author:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description:{
        type:String
    },
    rating:{
        type:number,
        required: true,
    },
    genre:{
        
    }

},
{
    timestamps: true,
})

const Book=moongose.model('Book',bookSchema)

module.exports=Book;