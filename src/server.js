const express = require("express")
const cors = require("cors")
const { router } = require("./router/router")
const db = require("./database/index")

const app = express()

//app.use(cors())

app.use(express.json())
db.conect()

//habilita
/*app.use(cors({

  origin: 'http://127.0.0.1:5500',

})) // dessa forma fica liberado para todos as requests : publico
*/

const allowedOrigens = [
'http://127.0.0.1:5500',
'http://google.com.br',
]
//forma dinamica
app.use(cors({

origin: function(origin, callback){

if(allowedOrigens.indexOf(origin !== -1 || !origin)){

  callback(null, true )

}else{
  callback( new Error('erro ao tencar linkar serv'))
}}
}))

/*
app.use(cors(function(req, callback){

let corsOptions;

if(allowedOrigens.indexOf(req.header('origin')) !== -1 ){

corsOptions= {origin:true}
}else{
  corsOptions = {origin: false}

}

callback(null, corsOptions)
}))
*/


app.get("/:id?",router)
app.post("/",router)
app.put("/:id", router)
app.delete("/:id", router)

const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})

