const db = require("../models")

module.exports = {
  // POST new thought to database
  // TODO: add functionality to push thought ID to given user's userThoughts
  create: function (req, res) {
    console.log("from thoughtController create", req.body);
    db.Thought
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // GET all thoughts
  findAll: function (req, res) {
    db.Thought
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // GET thought by ID
  findById: function (req, res) {
    console.log("from thoughtController findById", req.params.id);
    db.Thought
      .findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // PUT thought
  updateThought: function (req, res) {
    console.log("from thoughtController updateThought", req.body);
    db.Thought
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT thought with new reaction info
  addReaction: function (req, res) {
    console.log("from thoughtController addReaction", req.params, req.body);
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { thoughtReactions: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT thought to remove reaction info
  removeReaction: function (req, res) {
    console.log("from userController removeFriend", req.params);
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { thoughtReactions: req.params.reactionId } })
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
  deleteThought: function (req, res) {
    db.Thought
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}