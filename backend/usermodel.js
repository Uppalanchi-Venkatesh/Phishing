const mongoose = require('mongoose')
const dbuser = new mongoose.Schema({
    "email" : {type:String,require:true},
    "password" : {type:String,require:true}
})

module.exports = mongoose.model("phishing",dbuser)