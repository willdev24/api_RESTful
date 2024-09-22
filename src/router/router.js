const router = require("express").Router()
const controus = require('../controll/controll')

router.get("/:id?", controus.get)
router.post("/", controus.post)
router.put("/:id", controus.put)
router.delete("/:id", controus.delet)

module.exports={
    router
}