const express = require('express');
const router = express.Router();

console.log('router reloaded');

router.use('/', require('./users'));
router.use('/review', require('./review'));

module.exports = router;
