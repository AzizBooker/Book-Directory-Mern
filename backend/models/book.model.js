const mongoose=require("mongoose")
const imageModel=require('./image.model')
const Schema=mongoose.Schema

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
    cover:{
        type: imageModel,
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

const Book=mongoose.model('Book',bookSchema)

module.exports=Book;