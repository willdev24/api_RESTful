const express = require("express")
const cors = require("cors")
const { router } = require("./router/router")
const db = require("./database/index")

const app = express()

app.use(express.json())
db.conect()


//habilita
//app.use(cors()) // dessa forma fica liberado para todos as requests : publico

const allowedOrigens = [
'http://127.0.0.1:5500',
'http://127.0.0.1:5502/',
]

app.use(cors({
    origin: async function(origin, callback){
        let allowed = true
          if(!origin){ allowed = true}    //se nao vier nem uma informaçao de origem: como no caso dos mobaios. eu tenho que deixar truee
       
       if(await !allowedOrigens.includes(origin)){ // caso a origen nao esteja cadastrado dentro do array allowedorigens, sera bloqueada
        allowed = false
       }
       console.log(origin)
          callback(null, allowed)

    }
}))

app.get("/:id?",router)
app.post("/",router)
app.put("/:id", router)
app.delete("/:id", router)

const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})

