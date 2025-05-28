const { Router } = require('express'); 
const controller = require('./recensioni_controller');

const router = Router();

// GET /film
router.get('/', controller.getReviewList);/*
router.get('/:id', controller.getReviewById);

// POST /film
router.post('/', controller.addReview);

// DELETE
router.delete('/:id', controller.deleteReview);

// PUT = update
router.put('/', controller.updateReview);
*/
module.exports = router;
