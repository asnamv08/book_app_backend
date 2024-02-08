const mongoose=require("mongoose")
const bookschema=new mongoose.Schema(
    {
        bookname:String,
        bookauthor:String,
        bookprice:String,
        bookpublisher:String
    }
)
module.exports=mongoose.model("books",bookschema)