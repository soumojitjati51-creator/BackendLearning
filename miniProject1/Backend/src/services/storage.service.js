// // const ImageKit =require("@imagekit/nodejs")


// // const imagekit=new ImageKit({
// //     privateKey:process.env.IMAGEKIT_PRIVATE_KEY
// // })

// // async function uploadFile(buffer) {
// //     console.log(buffer);
    
// //     const result= await imagekit.files.upload({
// //         file:buffer.toString("base64"),
// //         fileName:"image.jpg"
// //     })

// //     return result;
// // }

// // module.exports=uploadFile;
// const { ImageKit } = require("@imagekit/nodejs")


// const imagekit = new ImageKit({
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
// })


// async function uploadFile(buffer) {

//     console.log(buffer);

//     const result = await imagekit.files.upload({
//         file: buffer.toString("base64"),
//         fileName: "image.jpg"
//     })

//     return result;

// }

// module.exports = uploadFile;
// // const ImageKit = require("@imagekit/nodejs")
// // const { toFile } = require("@imagekit/nodejs")

// // const imagekit = new ImageKit({
// //     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
// // })

// // async function uploadFile(buffer) {

// //     const result = await imagekit.files.upload({
// //         file: await toFile(buffer, "image.jpg"),
// //         fileName: "image.jpg"
// //     })

// //     console.log("IMAGEKIT RESULT:", result)

// //     return result
// // }

// // module.exports = uploadFile

// const ImageKit = require("@imagekit/nodejs")
// const { toFile } = require("@imagekit/nodejs")

// const imagekit = new ImageKit({
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
// })

// async function uploadFile(buffer, fileName) {

//     const result = await imagekit.files.upload({
//         file: await toFile(buffer, fileName),
//         fileName: fileName
//     })

//     console.log("IMAGEKIT RESULT:", result)

//     return result
// }

// module.exports = uploadFile

const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const sharp = require("sharp")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {

    // Convert/re-encode the uploaded image into a clean JPEG
    const processedBuffer = await sharp(buffer)
        .jpeg({
            quality: 85
        })
        .toBuffer()

    const result = await imagekit.files.upload({
        file: await toFile(processedBuffer, "image.jpg"),
        fileName: `post-${Date.now()}.jpg`,
        useUniqueFileName: true
    })

    console.log("IMAGEKIT RESULT:", result)
    console.log("IMAGE URL:", result.url)

    return result
}

module.exports = uploadFile