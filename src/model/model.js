const mongoose = require('mongoose')

const shema = new mongoose.Schema({
    nome:String,
    idade:Number,
})

const model = mongoose.model("cadastros",shema)

module.exports ={ 
    model
}