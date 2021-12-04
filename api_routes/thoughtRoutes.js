// **`/api/thoughts`**

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```


const router = require("express").Router();
const thoughtController = require("../controllers/thoughtController.js");

// stem "/api/thought"
router.route("/post")
  .post(thoughtController.create);

router.route("/post/:id/reaction/")
  .post(thoughtController.createReaction);


router.route("/")
  .get(thoughtController.findAll);

router.route("/:id")
  .get(thoughtController.findById);


router.route("/update/:id")
  .put(thoughtController.updateThought);


router.route("/delete/:id")
  .delete(thoughtController.deleteThought);

router.route("/delete/:id/reaction/:reactionId")
  .post(thoughtController.deleteReaction);


module.exports = router;