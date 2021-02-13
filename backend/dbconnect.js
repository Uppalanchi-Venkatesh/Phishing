const mongoose=require('mongoose');

module.exports={ 
    connect : function(){
        const optionsJSON = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true };
        const connection_string = process.env.connectionstring;
        mongoose.connect(connection_string, optionsJSON);

        const connectionObj = mongoose.connection;
        connectionObj.on('connected', function(){
            console.log("CONNECTED TO DB");
        })
        connectionObj.on('disconnected', function(){
            console.log("DISCONNECTED FROM DB");
        })

        connectionObj.on('error', function(err){
            console.log("ERROR: "+err);
        })
    },
    disconnect : function(){
        mongoose.disconnect();   
    }
}
