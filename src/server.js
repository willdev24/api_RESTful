const express = require("express")
const { router } = require("./router/router")
const db = require("./database/index")
const app = express()
app.use(express.urlencoded({extended:true}))

db.conect()


app.get("/",router)



const port = process.env.PORT || 8080
app.listen(port,()=>{ console.log(`servidor rodando na porta ${port}`)})