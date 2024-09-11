const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("123")
})

module.exports={
    router
}