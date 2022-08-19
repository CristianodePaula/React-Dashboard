const express = require('express')
const { 
    addAnnouncement, 
    getAnnouncement, 
    deleteAnnouncement, 
    updateAnnouncement, 
    random, 
    search, 
    trend } = require('../controllers/announcement')
const { verifyToken } = require('../verifyToken')

const router = express.Router();

router.post("/",  addAnnouncement)
router.get("/find/:id", getAnnouncement)
router.put("/:id", verifyToken, updateAnnouncement)
router.delete("/:id", verifyToken, deleteAnnouncement)
router.get("/trend", trend)
router.get("/random", random)
router.get("/search", search)

module.exports = router
