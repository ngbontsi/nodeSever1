const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.getAllUsers);
router.get('/byId', userCtrl.getUserById);
router.put('/update', userCtrl.modifyUser);
router.delete('/user', userCtrl.deleteUser);

module.exports = router;
