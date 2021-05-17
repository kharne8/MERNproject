const express = require('express');
const router = express.Router();

//route//desc//access => GET api/post//Test route//Public
router.get('/', (req, res) => res.send('Post route'));

module.exports = router;
