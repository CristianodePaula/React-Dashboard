const mongoose = require('mongoose')

const FeedBackSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    reason: {
        type: String,
        required: true,
      },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FeedBack", FeedBackSchema)