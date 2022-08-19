const { createError } = require('../error')
const FeedBack = require('../models/FeedBack')

const addFeedBack = async (req, res, next) => {
  const newFeedBack = new FeedBack({ ...req.body });
  try {
    const savedFeedBack = await newFeedBack.save();
    res.status(200).send(savedFeedBack);
  } catch (err) {
    next(err);
  }
};

const deleteFeedBack = async (req, res, next) => {
  try {
      await FeedBack.findByIdAndDelete();
      res.status(200).json("A menssagem foi apagada.");
      return next(createError(403));
  } catch (err) {
    next(err);
  }
};

const getFeedBack = async (req, res, next) => {
    try {
      const feedback = await FeedBack.findById();
      res.status(200).json(feedback);
    } catch (err) {
      next(err);
    }
  };

module.exports = { 
    addFeedBack,
    getFeedBack,
    deleteFeedBack,
}