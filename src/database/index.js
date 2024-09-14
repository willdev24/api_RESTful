const mongoose = require('mongoose')

function conect(){
mongoose.connect("mongodb://localhost:27017/api_restful")

const mongoB =  mongoose.connection

mongoB.once("open",()=>{

    console.log("banco de dados conectao")
})

mongoB.on("erro",console.error.bind(console,"erro ao tentar conectar"))

}

module.exports = {
    conect
}