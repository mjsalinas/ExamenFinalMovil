const express = require('express');
const {getAllReviews,createReview,deleteReview,updateReview} = require('../controllers/reviewController');
const router = express.Router();

router.get('/reviews', getAllReviews);
router.post('/reviews', createReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

module.exports = router;

