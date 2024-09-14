const { query } = require("express")
const { model } = require("../model/model")



const get = async (req,res)=>{

    const listar = await model.find()

    res.send(
        listar
    )

}

const post = async (req,res)=>{

    const {nome,idade}= req.body
    const dados = await new model({
    nome,
    idade,
    
    })
    
    console.log(dados)
    res.send("cadastro realizado")
    dados.save()    
};

const put = async (req,res)=>{
const {id}= req.params


const alterarProd = await model.findOne({_id:id})

console.log(alterarProd)
await alterarProd.updateOne(req.body) //atualizo o corpo completo do objto


res.send("alterado")

};

const delet = async (req,res)=>{

}

module.exports ={
    get,
    post,
    put,
    delet,
}