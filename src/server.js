const express = require("express")
const { router } = require("./router/router")
const db = require("./database/index")
const { teste } = require("./model/model")

const app = express()

app.use(express.json())
db.conect()

const lista = [
    "http://127.0.0.1:6000/",
    "http://127.0.0.1:5511/",
]



app.get("/:id?",router)
app.post("/",router)
app.put("/:id", router)
app.delete("/:id", router)

const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})

