var express = require('express');
const morgan = require('morgan');
var cors = require('cors')
var app = express();

//basic setup

app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

app.listen(8001,(err)=>{
    if(err){
        console.log("something went wrong")
    }else{
        console.log("app is listen at port 8001")
    }
})