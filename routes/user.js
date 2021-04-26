const express = require('express')
const router = express.Router()
const {
    recommendChannels,
    toggleSubscribe,
    getLikedVideos,
    getProfile,
    getHistory,
    editUser,
    getFeed,
} = require('../controllers/user-controller')

const { protect } = require('../middlewares/auth')

router.put('/', protect, editUser)
router.get('/', protect, recommendChannels)
router.get('/feed', protect, getFeed)
router.get('/likedVideos', protect, getLikedVideos)
router.get('/history', protect, getHistory)
router.get('/:id', protect, getProfile)
router.get('/:id/toggleSubscribe', protect, toggleSubscribe)

module.exports = router