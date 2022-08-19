const Announcement = require('../models/Announcement')
const { createError } = require('../error')

const addAnnouncement = async (req, res, next) => {
  const newAnnouncement = new Announcement();
  try {
    const savedAnnouncement = await newAnnouncement.save();
    res.status(200).json(savedAnnouncement);
  } catch (err) {
    next(err);
  }
};

const getAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};

const updateAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) return next(createError(404, "Announcement not found!"));
    if (req.user.id === announcement .userId) {
      const updatedAnnouncement = await Announcement.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedAnnouncement);
    } else {
      return next(createError(403, "You can update only your Announcement!"));
    }
  } catch (err) {
    next(err);
  }
};

const deleteAnnouncement = async (req, res, next) => {
  try {
    const announcement  = await Announcement .findById(req.params.id);
    if (!announcement ) return next(createError(404, "Announcement not found!"));
    if (req.user.id === announcement .userId) {
      await Announcement .findByIdAndDelete(req.params.id);
      res.status(200).json("The Announcement has been deleted.");
    } else {
      return next(createError(403, "You can delete only your Announcement!"));
    }
  } catch (err) {
    next(err);
  }
};

const random = async (req, res, next) => {
  try {
    const announcement  = await Announcement.aggregate([{ $sample: { size: 40 } }]); 
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};

const trend = async (req, res, next) => {
  try {
    const announcement  = await Announcement .find().sort({ views: -1 });
    res.status(200).json(announcement );
  } catch (err) {
    next(err);
  }
};

const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const  announcement = await Announcement.find({
      title: { $regex: query, $options: "i" }, 
    }).limit(40);  
    res.status(200).json( announcement);
  } catch (err) {
    next(err);
  }
};

module.exports = { 
  addAnnouncement,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  random,
  trend,
  search,
}