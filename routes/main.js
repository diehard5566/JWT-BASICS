const express = require('express');
const router = express.Router()

const { login, dashboard } = require('../controllers/main')

const authmiddleware = require('../middleware/auth')


router.route('/dashboard').get(authmiddleware, dashboard)
router.route('/login').post(login)

module.exports = router