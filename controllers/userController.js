const db = require("../models")

module.exports = {
  // POST new user to database
  create: function (req, res) {
    console.log("from userController create", req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // GET all users
  findAll: function (req, res) {
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // GET user by ID
  // ? TODO: add functionality to populate friend and thought info
  findById: function (req, res) {
    console.log("from userController findByID", req.params.id);
    db.User
      .findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // PUT user
  updateUser: function (req, res) {
    console.log("from userController updateUser", req.body);
    db.User
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT user with new friend info
  addFriend: function (req, res) {
    console.log("from userController addFriend", req.params);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { userFriends: req.params.friendId } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT user to remove friend info
  removeFriend: function (req, res) {
    console.log("from userController removeFriend", req.params);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { userFriends: req.params.friendId } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // deleteBook: async function (req, res) {
  //   const updatedUser = await db.User.findOneAndUpdate(
  //     { _id: req.user._id },
  //     { $pull: { myBooks: { bookId: req.params.id }}},
  //     { new: true});
  //     if (!updatedUser) {
  //       return res.status(404).json({ message: "User not found "});
  //     }
  //     return res.json(updatedUser);
  // }


  // DELETE user
  // TODO: Add functionality to remove given user's thoughts when they're deleted
  deleteUser: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}