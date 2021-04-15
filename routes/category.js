const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');

router.post('/addCat', categoryCtrl.addCat);
router.get('/', categoryCtrl.getAllCategories);
router.get('/byId', categoryCtrl.getCategoryById);
router.put('/update', categoryCtrl.updateCategory);
router.delete('/delete', categoryCtrl.deleteCategory);

module.exports = router;