const express = require("express")
const { router } = require("./router/router")
const db = require("./database/index")
const { teste } = require("./model/model")

const app = express()

app.use(express.json())
db.conect()

app.get("/",router)
app.post("/",router)
app.put("/:id?", router)
app.delete("/:id?", router)

const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})

