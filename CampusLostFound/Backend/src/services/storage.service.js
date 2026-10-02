const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const sharp = require("sharp");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {
    try {
        const processedBuffer = await sharp(buffer)
            .resize({ width: 800, withoutEnlargement: true })
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
    catch (error) {
        console.error("ImageKit upload error", error);
        throw new Error("Failed to process and upload image");

    }


}

module.exports=uploadFile