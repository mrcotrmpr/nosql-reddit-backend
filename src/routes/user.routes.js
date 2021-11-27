const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');

// create a user
router.post('/', userController.create)

// get a user
router.get('/:id', userController.getOne)

// get all users
router.get('/', userController.getAll)

// change password
router.post('/password', userController.changePassword)

// remove user
router.delete('/', userController.delete)

module.exports = router