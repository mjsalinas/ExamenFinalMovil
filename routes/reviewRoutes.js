const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// GET todas las reseñas
router.get('/', reviewController.getAllReviews);

// POST nueva reseña
router.post('/', reviewController.createReview);

// DELETE reseña por id
router.delete('/:id', reviewController.deleteReview);
// PUT actualizar reseña por id
router.put('/:id', reviewController.updateReview);


module.exports = router;