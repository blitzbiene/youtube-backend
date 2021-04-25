const express = require('express')
const { signUp, logIn } = require('../controllers/auth')
const { protect } = require('../middlewares/auth')

const router = express.Router()

router.post('/signup', signUp)
router.post('/login', protect, logIn)

module.exports = router