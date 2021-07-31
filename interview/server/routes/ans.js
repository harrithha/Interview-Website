const express = require('express');
const ansController = require('./../controller/ansController');

const router = express.Router();

router.post('/answers', ansController.store);

router
  .route('/')
  .get(ansController.getAns)

module.exports = router;