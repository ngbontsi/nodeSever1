const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', auth,userCtrl.getAllUsers);
router.get('/byId',auth, userCtrl.getUserById);
router.put('/update',auth, userCtrl.modifyUser);
router.delete('/user',auth, userCtrl.deleteUser);

module.exports = router;