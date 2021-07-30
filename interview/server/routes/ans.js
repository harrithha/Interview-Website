const express = require('express');
const ansController = require('./../controller/ans');

const router = express.Router();

router.post('/answers', ansController.store);

router
  .route('/ans')
  .get(ansController.getAns)

module.exports = router;