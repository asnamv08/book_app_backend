const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bookroute=require("./controllers/bookrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://asnamv123:asnamv08@cluster0.erlchgb.mongodb.net/booksDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
app.use("/api/booksapp",bookroute)
app.listen(3001,()=>{
    console.log("server running")
})