const User = require('../models/User')
const Video = require('../models/Video')
const { createError } = require('../error')

//userId: req.user.id,
const addVideo = async (req, res, next) => {
  const newVideo = new Video({  ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You can update only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been deleted.");
    } else {
      return next(createError(403, "You can delete only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("The view has been increased.");
  } catch (err) {
    next(err);
  }
};

const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]); /// agreggate busca amostra aleatória de 40 em $sample
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

// mais vistos
const trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 }); // views: -1 busca vides mais vistos (1 menos vistos)
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

// seguir o canal
const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all( // busca todos os canais
      subscribedChannels.map(async (channelId) => { // mapa do canal por id
        return await Video.find({ userId: channelId }); //  id do usuario foir igual ao do canal 
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt)); //ver o video mais recente / flat = tudo em um array
  } catch (err) {
    next(err);
  }
};


const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(","); // separa tags com virgula
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20); // procura videos por tags obs: $in = o elemento do array corresponde?
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" }, // $regex faz a busca / $option "i"  maísculas e minúsculas
    }).limit(40); // máximo de 40 
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

module.exports = { 
  addVideo,
  getVideo,
  updateVideo,
  deleteVideo,
  addView,
  random,
  trend,
  sub,
  getByTag,
  search,
}