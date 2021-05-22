const config = require('../../config')

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(config.mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (error) {
        console.log(`Error occured: ${error}`)
        
    }
}

module.exports = connectDB