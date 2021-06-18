const router = require("express").Router();
const petController = require("../../controllers/petController");

router.route("/")
    .get(petController.findAll)
    .post(petController.create);

router.route("/:id")
    .get(petController.findById)
    .delete(petController.remove)
    .put(petController.update);

module.exports = router;