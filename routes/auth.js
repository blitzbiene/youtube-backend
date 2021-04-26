const express = require('express')
const { signUp, logIn } = require('../controllers/auth-controller')
const { protect } = require('../middlewares/auth')

const router = express.Router()

router.post('/signup', signUp)
router.post('/login', logIn)

module.exports = router