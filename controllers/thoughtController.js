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
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT thought with new reaction info
  addReaction: function (req, res) {
    console.log("from thoughtController addReaction", req.params, req.body);
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { thoughtReactions: req.body } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT thought to remove reaction info
  removeReaction: function (req, res) {
    console.log("from thoughtController removeReaction", req.params);
    db.Thought
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { thoughtReactions: { reactionId: req.params.reactionId } } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // DELETE thought
  // TODO: add functionality to remove thought ID from given user's userThoughts
  deleteThought: function (req, res) {
    db.Thought
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}