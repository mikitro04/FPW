const { Router } = require('express'); 
const controller = require('./utenti_controller');

const router = Router();

// GET /film
router.get('/', controller.getUsersList);
router.get('/:id', controller.getUsersById);

// POST /film
router.post('/', controller.addUsers);

// DELETE
router.delete('/:id', controller.deleteUsers);

// PUT = update
router.put('/', controller.updateUsers);

module.exports = router;
