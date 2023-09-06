const express = require ('express')

const UserController = require('../controllers/user')
const router = express.Router()

const path = 'user'

router.get(
    `/${path}`,
    UserController.getData
)
module.exports = router