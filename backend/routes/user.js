const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me', auth, userController.getProfile);
router.put('/me', auth, userController.updateProfile);
router.put('/change-password', auth, userController.changePassword);

module.exports = router;
