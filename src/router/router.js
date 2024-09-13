const router = require("express").Router()
const controus = require('../controll/controll')

router.get("/", controus.get)

module.exports={
    router
}