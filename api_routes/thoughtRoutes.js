const router = require("express").Router();
const thoughtController = require("../controllers/thoughtController.js");

// stem "/api/thought"
router.route("/post")
  .post(thoughtController.create);


router.route("/")
  .get(thoughtController.findAll);

router.route("/:id")
  .get(thoughtController.findById);


router.route("/update/:id")
  .put(thoughtController.updateThought);

router.route("/post/:id/reaction/")
  .put(thoughtController.addReaction);

router.route("/delete/:id/reaction/:reactionId")
  .put(thoughtController.removeReaction);


router.route("/delete/:id")
  .delete(thoughtController.deleteThought);


module.exports = router;