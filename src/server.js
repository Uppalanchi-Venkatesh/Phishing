const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded( {extended:true} ))

app.get('/',(req,res)=>{
        console.log(req.body.username)
})

app.listen(4444,()=>{
    console.log("server started")
})