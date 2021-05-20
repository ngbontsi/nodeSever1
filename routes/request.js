const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const requestCtrl = require('../controllers/request');

router.post('/create', requestCtrl.signup);
router.get('/', auth,requestCtrl.getAllUsers);
router.get('/byId',auth, requestCtrl.getUserById);
router.put('/update',auth, requestCtrl.modifyUser);
router.delete('/user',auth, requestCtrl.deleteUser);

module.exports = router;