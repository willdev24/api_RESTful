const express = require("express")
const { router } = require("./router/router")
const app = express()

app.get("/",router)







const port = process.env.PORT || 8080
app.listen(port,()=>{ `servidor rodando na porta ${port}`})