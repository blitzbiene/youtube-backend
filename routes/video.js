const express = require('express')
const router = express.Router()
const {
    newVideo
} = require('../controllers/video-controller')

const { protect } = require('../middlewares/auth')

router.post('/', protect, newVideo)

module.exports = router