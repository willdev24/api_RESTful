const { query } = require("express")
const { model } = require("../model/model")
const products = require('../model/model')


const get = async (req,res)=>{

    const {id} = req.params
    const obj = id ? {_id:id}:null;

    const listar = await model.find(obj)

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
    

    res.send("cadastro realizado")
    dados.save()    
};


const put = async (req,res)=>{
const {id}= req.params

const uppdat = await products.model.findOneAndUpdate({_id:id},req.body, {new:true}) //usando esse metodo vc manda a atualizaçao pro banco de dados 
                                                                                    // e ele retorna a atualizaçao e ai sim processa o resto do codgo

//--- usando esse metodo abaixo, ele atualiza o banco de dados mas nao retorna as informçoes ja atualisadas 
/*const ad= await products.model.findOne({_id : id})
const atual = await ad.updateOne(req.body) //atualizo o corpo completo do objto
*/
res.status(202).send(uppdat)

};


const delet = async (req,res)=>{
    const {id}= req.params

    
    const apagar = await products.model.deleteOne({_id:id})
    res.status(202).send("ok")
    
}

module.exports ={
    get,
    post,
    put,
    delet,
}