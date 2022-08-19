const mongoose = require('mongoose')

const AnnouncementSchema = new mongoose.Schema(
    {
    title: {
      type: String,

    },
    desc: {
      type: String,
     
    },
    imgUrl: {
      type: String,

    },
    videoUrl: {
      type: String,
  
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", AnnouncementSchema)


