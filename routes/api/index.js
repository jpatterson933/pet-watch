const express = require('express');
const router = express.Router();
const petRoutes = require('./pet');

router.use("/pets", petRoutes);

module.exports = router;