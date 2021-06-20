const router = require("express").Router();
const petController = require("../../controllers/petController");

router.route("/")
    .post(petController.create);

module.exports = router;