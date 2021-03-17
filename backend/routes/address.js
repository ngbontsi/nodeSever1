const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const addressCtrl = require('../controllers/address');

router.get('/',auth, addressCtrl.getAllStuff);
router.post('/',auth,multer, addressCtrl.createThing);
router.get('/:id',auth, addressCtrl.getOneThing);
router.put('/:id',auth,multer, addressCtrl.modifyThing);
router.delete('/:id',auth, addressCtrl.deleteThing);

module.exports = router;

