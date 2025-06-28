const express = require('express');
const {getAllReviews,addReview,deleteReview} = require('../controllers/reviewController');
const router = express.Router();

router.get('/reviews', getAllReviews);
router.post('/reviews', addReview);
router.put('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

module.exports = router;

