// **Thought**:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reactions = require("./reactionModel");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    userName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    },
    thoughtReactions: [reactions]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.thoughtReactions?.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;