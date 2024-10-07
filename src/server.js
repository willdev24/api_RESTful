const express = require("express")
const cors = require("cors")
const { router } = require("./router/router")
const db = require("./database/index")

const app = express()

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

app.use(cors({

origin: function(origin, callback){

if(allowedOrigens.indexOf(origin !== -1 || !origin)){

  callback(null, true )

}else{
  callback( new Error('erro ao tencar linkar serv'))
}


}

}))

app.get("/:id?",router)
app.post("/",router)
app.put("/:id", router)
app.delete("/:id", router)

const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})

