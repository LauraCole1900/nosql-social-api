// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thoughts = require("./thoughtModel");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    userThoughts: {
      type: String,
      required: true
    },
    userFriends: [books]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.userFriends?.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;