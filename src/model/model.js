const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    nome:String,
    idade:Number,
})

const model = new mongoose.model("cadastros",schema)


module.exports={
    model
}