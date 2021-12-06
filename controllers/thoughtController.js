const db = require("../models")

module.exports = {
  // POST new thought to database
  create: function (req, res) {
    db.Thought
      .create(req.body)
      .then(thought => {
        db.User.findOneAndUpdate({ _id: thought.userId }, { $addToSet: { userThoughts: thought._id } }, { new: true })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      })
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
    db.Thought
      .findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // PUT thought
  updateThought: function (req, res) {
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT thought with new reaction info
  addReaction: function (req, res) {
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { thoughtReactions: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT thought to remove reaction info
  removeReaction: function (req, res) {
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { thoughtReactions: { reactionId: req.params.reactionId } } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // DELETE thought
  deleteThought: function (req, res) {
    db.Thought
      .findOneAndRemove({ _id: req.params.id })
      .then(thought =>
        !thought
          ? res.status(404).json({ message: "Cannot find a thought with that ID" })
          : db.User.findOneAndUpdate(
            { userThoughts: req.params.id },
            { $pull: { userThoughts: req.params.id } },
            { new: true }
          ))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
