const express = require("express")
const { router } = require("./router/router")
const mongodb = require("./database/db")
const app = express()

mongodb.conect()

app.get("/",router)



const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})