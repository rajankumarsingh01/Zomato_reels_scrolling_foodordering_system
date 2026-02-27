// const ImageKit = require("imagekit");

// const imagekit = new ImageKit({
//     publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//     urlEndpoint: process.env.IMAGEKIT_URL_KEY,
// });



// async function uploadFile(file,fileName){
//     const result = await imagekit.upload({
//         file:file,
//         fileName:fileName,
//     });

//     return result;
// }


// module.exports = {
//     uploadFile
// }



// const ImageKit = require("imagekit");



// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_KEY,
// });

// async function uploadFile(file, fileName) {
//   return await imagekit.upload({
//     file,
//     fileName,
//   });
// }



// // async function uploadFile(file,fileName){
// //     const result = await imagekit.upload({
// //         // file:file,
// //           file: buffer.toString("base64"), 
// //         fileName:fileName,
// //     });

//     return result;
// }

// module.exports = { uploadFile };





const ImageKit = require("imagekit");

const imagekit = new ImageKit({


  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_KEY, // FIX
});

// async function uploadFile(file, fileName) {
 
//   const result = await imagekit.upload({
//     file: file.toString("base64"), // FIX
//     fileName: fileName,
//   });

//   return result;
// }





// async function uploadFile(file, fileName) {
//   try {
//     const result = await imagekit.upload({
//       file: file.toString("base64"),
//       fileName: fileName,
//     });
//     return result;
//   } catch (err) {
//     console.error("❌ ImageKit Upload Failed:", err.message);
//     throw err;
//   }
// }

// async function uploadFile(file, fileName) {
  // try {
  //   const result = await imagekit.upload({
  //     file: file.toString("base64"),
  //     fileName: fileName,
  //     useUniqueFileName: true,
  //     timeout: 120000, // ⬅️ IMPORTANT (60 sec)
  //   });
async function uploadFile(fileBuffer, fileName) {
  try {
    const result = await imagekit.upload({
      file: fileBuffer.toString("base64"), // ✅ MUST
      fileName,
      useUniqueFileName: true,
      timeout: 180000, // 3 min (videos)
    });

    console.log("✅ ImageKit upload success:", result.url);
    return result;

  } catch (err) {
    console.error("❌ ImageKit Upload Failed:", err.message);
    throw err;
  }
}


module.exports = { uploadFile };
