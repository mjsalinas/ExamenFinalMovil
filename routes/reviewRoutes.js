//examen
const express = require('express');
const router = express.Router();
const {getAllReviews, createReview, deleteReview, updateReview} = require('../controllers/reviewController');

router.get('/', getAllReviews);
router.post('/', createReview);
router.delete('/:id', deleteReview);
router.put('/:id', updateReview);


module.exports = router;