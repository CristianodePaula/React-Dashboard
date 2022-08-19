const express = require('express')
const { 
    addFeedBack, 
    deleteFeedBack, 
    getFeedBack 
} = require("../controllers/feedback")
const {verifyToken} = require('../verifyToken')
const router = express.Router();

router.post("/", verifyToken, addFeedBack)
router.delete("/:id", verifyToken, deleteFeedBack)
router.get("/:feebackId", verifyToken, getFeedBack)

module.exports = router
