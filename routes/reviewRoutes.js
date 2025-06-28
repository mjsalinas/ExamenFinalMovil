const express = require('express');
const router = express.Router();
const {
    getAllReviews,
    createReview,
    deleteReview,
    updateReview
} = require('../controllers/reviewController');

router.get('/get', getAllReviews);
router.post('/addReview', createReview);
router.delete('/delete/:id', deleteReview);
router.put('/actualizar/:id', updateReview);

module.exports = router;
