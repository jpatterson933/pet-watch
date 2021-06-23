const router = require("express").Router();
const petController = require("../../controllers/petController");

router.route("/")
    .get(petController.findAll)
    .post(petController.create);

module.exports = router;