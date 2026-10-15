const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.sevice");
const jwt = require("jsonwebtoken");


async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;
    const result = await uploadFile(file.buffer.toString('base64'));
    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })

}
async function createAlbum(req, res) {
    const { title, musics } = req.body;
    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musics
    })

    res.status(201).json({
        message: "Album created successfully",
        music: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    })

}

async function getAllMusic(req,res) {
    const musics=await musicModel
    .find()
    // .skip(1) //to skip some no. of songs
    .limit(2) //ek baar me highest 2 songs leke aa sakte hai uska limit hai ye
    .populate('artist')  //populate used to show artist detail instead of only id

    res.status(200).json({
        message:"Music fetched successfully",
        musics:musics
    })
}

async function getAllAlbums(req,res) {
    const albums=await albumModel.find().select("title artist ").populate("artist","username email")
    res.status(200).json({
        message:"Albums fetched successfully",
        albums:albums
    })
}

async function getAlbumById(req,res){
    const albumId=req.params.albumId;
    const album= await albumModel.findById(albumId).populate("artist","username email").populate("musics")

    return res.status(200).json({
       message:"Album fetched successfully",
       album:album 
    })
}

module.exports = { createMusic, createAlbum,getAllMusic ,getAllAlbums, getAlbumById};