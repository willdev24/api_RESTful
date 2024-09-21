const { query } = require("express")
const { model } = require("../model/model")
const products = require('../model/model')


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

const ad= await products.model.findOne({_id : id})

const atual = await ad.updateOne(req.body) //atualizo o corpo completo do objto

res.status(202).send(ad)

};


const delet = async (req,res)=>{
    const {id}= req.params

    
    const apagar = await products.model.deleteOne({_id:id})
    console.log(apagar)
    res.status(202).send("ok")
    
}

module.exports ={
    get,
    post,
    put,
    delet,
}