const express = require("express")
const router = express.Router()
const homeController = require("../controller/homeController.js")

router.get('/' , homeController.home)

module.exports.router = router