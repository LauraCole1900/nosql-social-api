// **Reaction** (SCHEMA ONLY)

// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    default: new Schema.Types.ObjectId
  },
  body: {
    type: String,
    required: true,
    maxLength: 280
  },
  userName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = reactionSchema;