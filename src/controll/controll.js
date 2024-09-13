const { model } = require("mongoose")
const get = async (req,res)=>{
  
const dados = await new model({
nome:"willy",
idade:50,

})

dados.save()

    res.send("123")
}

module.exports ={
    get
}