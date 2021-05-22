const mongoose = require('mongoose')
// const Schema = require('mongoose').Schema

var treetypeschema = new mongoose.Schema({
    TreeTypeID:{
        //type: Schema.Types.ObjectId,
        type: String,
        required: true
    },
    TreeTypeName:{
        type: String,
        required: true
    }
})

const TreeTypes = mongoose.model('TreeTypes', treetypeschema)

module.exports = TreeTypes