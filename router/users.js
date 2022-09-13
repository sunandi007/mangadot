const express = require('express');
const router = express.Router();

const userController = require('../controller/users');

// Route Groups
router.route('/user')
    // .get(userController.index)
    .get(userController.findByQuery)
    .post(userController.create)

router.route('/user/:id', userController.update)
    .get(userController.findById)
    .put(userController.update)

router.delete('/user/:id', userController.delete)

module.exports = router
