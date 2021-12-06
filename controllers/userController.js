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
  findById: function (req, res) {
    console.log("from userController findById", req.params.id);
    db.User
      .findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // PUT user
  updateUser: function (req, res) {
    console.log("from userController updateUser", req.params, req.body);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT user with new friend info
  addFriend: function (req, res) {
    console.log("from userController addFriend", req.params);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $addToSet: { userFriends: req.params.friendId } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // PUT user to remove friend info
  removeFriend: function (req, res) {
    console.log("from userController removeFriend", req.params);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { userFriends: req.params.friendId } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },


  // DELETE user
  // TODO: Add functionality to remove given user's thoughts when they're deleted
  deleteUser: function (req, res) {
    db.User.findOneAndDelete({ _id: req.params.id })
      .then(user =>
        !user
          ? res.status(400).json({ message: "User not found" })
          : db.Thought.deleteMany({ _id: { $in: user.userThoughts } })
      )
      .then(() => res.json({ message: "User and thoughts deleted" }))
      .catch(err => res.status(422).json(err))
  }
}

// deleteCourse(req, res) {
//   Course.findOneAndDelete({ _id: req.params.courseId })
//     .then((course) =>
//       !course
//         ? res.status(404).json({ message: 'No course with that ID' })
//         : Student.deleteMany({ _id: { $in: course.students } })
//     )
//     .then(() => res.json({ message: 'Course and students deleted!' }))
//     .catch((err) => res.status(500).json(err));
// },

// deleteStudent(req, res) {
//   Student.findOneAndRemove({ _id: req.params.studentId })
//     .then((student) =>
//       !student
//         ? res.status(404).json({ message: 'No such student exists' })
//         : Course.findOneAndUpdate(
//             { students: req.params.studentId },
//             { $pull: { students: req.params.studentId } },
//             { new: true }
//           )
//     )
//     .then((course) =>
//       !course
//         ? res.status(404).json({
//             message: 'Student deleted, but no courses found',
//           })
//         : res.json({ message: 'Student successfully deleted' })
//     )
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });