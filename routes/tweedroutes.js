const express = require('express');
const tweedsController = require('../controllers/tweedsController');

const tweedRoutes = express.Router();

tweedRoutes.get('/', tweedsController.index);
tweedRoutes.get('/:id', tweedsController.show);
tweedRoutes.post('/', tweedsController.create);

module.exports = tweedRoutes;