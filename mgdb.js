
const mongoose=require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env.MONGO_URL;
const connectMongo=()=> {mongoose.connect(mongoURI, { useNewUrlParser: true});
mongoose.connection
.once('open', ()=> console.log("connected"))
.on('error',error =>{
    console.log('error',error)
});}
module.exports = connectMongo;