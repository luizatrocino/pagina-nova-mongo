const mongoose = require('mongoose')
require('dotenv').config()

const connectMongoDb = async () =>{
    try {
        await mongoose.connect(
            process.env.MONGO_URI_CONNECTION,
            {
                useNewUrlParser:true, //para conseguir quebrar a URL
                useUnifiedTopology:true 
            }
        )
    } catch(error) {
        console.log(error)
    }
}

module.exports = connectMongoDb