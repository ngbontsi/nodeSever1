const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const companyCtrl = require('../controllers/company');

router.get('/',auth, companyCtrl.getAllStuff);
router.post('/',auth,multer, companyCtrl.createThing);
router.get('/:id',auth, companyCtrl.getOneThing);
router.put('/:id',auth,multer, companyCtrl.modifyThing);
router.delete('/:id',auth, companyCtrl.deleteThing);

module.exports = router;

