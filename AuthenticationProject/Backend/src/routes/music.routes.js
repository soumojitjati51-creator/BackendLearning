const express=require('express');
const musicController=require('../controllers/music.controllers');
const authMiddleware=require("../middlewares/auth.middleware")
const multer= require('multer');

const upload= multer({
    storage:multer.memoryStorage(),
    limits: {
        fileSize: 25 * 1024 * 1024 // Maximum 25 MB
    }
})

const router=express.Router();

router.post('/upload',authMiddleware.authArtist,upload.single("music"),musicController.createMusic);

router.post("/album",authMiddleware.authArtist,musicController.createAlbum);

router.get("/",authMiddleware.authUser,musicController.getAllMusic)

router.get("/albums",authMiddleware.authUser,musicController.getAllAlbums)

router.get("/albums/:albumId",authMiddleware.authUser,musicController.getAlbumById)

module.exports=router;