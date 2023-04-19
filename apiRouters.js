const express = require('express');
const apiController = require('./apiController');

const router = express.Router(); //make it be a middleware
router.route('/realtimeData').get(apiController.realtimeData);
router
  .route('/TrendOfTotalCasesPerDay')
  .get(apiController.TrendOfTotalCasesPerDay);
module.exports = router;
