const mongoose = require('mongoose')

const shema =  mongoose.Schema({
    nome:String,
    idade:Number,
})

const model = mongoose.model("cadastrados",shema)

module.exports ={ 
    model
}