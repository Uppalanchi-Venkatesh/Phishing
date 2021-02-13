const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const userlib = require('./backend/userlib')
require('dotenv').config();

const dbconnect = require('./backend/dbconnect')
app.use(bodyparser.urlencoded( {extended:true} ))
app.use(express.static(__dirname+'/frontend'))
app.use(express.json())
dbconnect.connect(true)
app.post('/',(req,res)=>{
    console.log(JSON.stringify(req.body))
    userlib.createUsers((err)=>{
        if(err){
            res.json(err)
        }
        else
         return req.body
    })
}) 

app.get('/',(req,res)=>{
        res.sendFile('/index.html')
})

app.listen(4444,()=>{
    console.log("server started")
})