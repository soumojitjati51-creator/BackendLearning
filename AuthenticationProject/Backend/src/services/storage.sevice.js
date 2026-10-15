// const {ImageKit}=require("@imagekit/nodejs")
// const path = require("path");
// const client = new ImageKit({
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
// });

// async function uploadFile(file){
//     const result= await client.files.upload({
//         file,
//         filename:`music_${Date.now()}${path.extname(file.originalname || ".mp3")}`,
//         folder:"musicApp/music",
//     })
//     return result;
// }
// module.exports={uploadFile};

const { ImageKit } = require("@imagekit/nodejs");
const path = require("path");

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file, originalName = "music.mp3") {
    const result = await client.files.upload({
        file,
        fileName: `music_${Date.now()}${path.extname(originalName) || ".mp3"}`,
        folder: "/musicApp/music",
    });

    return result;
}

module.exports = {uploadFile};
