const express = require('express')
const router = express.Router()
const validateObjectId = require('../middlewares/validateObjectId')
const {
    addVideo,
    getVideo,
    addView,
    addComment,
    likeVideo,
    dislikeVideo,
    recommendVideos,
    search
} = require('../controllers/video-controller')

const { protect } = require('../middlewares/auth')

router.post('/', protect, addVideo)
router.get('/', protect, recommendVideos)
router.get('/:id', protect, validateObjectId, getVideo)
router.get('/:id/like', protect, validateObjectId, likeVideo)
router.get('/:id/dislike', protect, validateObjectId, dislikeVideo)
router.post('/:id/comment', protect, validateObjectId, addComment)
router.get('/:id/view', protect, validateObjectId, addView)
router.get('/search', protect, search)


module.exports = router