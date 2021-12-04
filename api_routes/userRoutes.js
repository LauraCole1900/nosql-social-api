// **`/api/users`**

// * `GET` a single user by its `_id` and populated thought and friend data

// **BONUS**: Remove a user's associated thoughts when deleted.

// **`/api/users/:userId/friends/:friendId`**


const router = require("express").Router();
const userController = require("../controllers/userController.js");

// stem "/api/user"
router.route("/post")
  .post(userController.create);


router.route("/")
  .get(userController.findAll);

router.route("/:id")
  .get(userController.findById);


router.route("/update/:id")
  .put(userController.updateUser);

router.route("/post/:id/friends/:friendId")
  .put(userController.addFriend);

router.route("/delete/:id/friends/:friendId")
  .put(userController.removeFriend);


router.route("/delete/:id")
  .delete(userController.deleteUser);


module.exports = router;