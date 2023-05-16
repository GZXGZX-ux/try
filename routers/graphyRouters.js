const express = require('express');
const graphyController = require('../controller/graphyController');

const router = express.Router(); //make it be a middleware

router.route('/graphy/:id').get(graphyController.learngraphy);

module.exports = router;
