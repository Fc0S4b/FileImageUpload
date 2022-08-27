const { StatusCodes } = require('http-status-codes');
const path = require('path');
const CustomError = require('../errors');

// si usas cloudinary
// const cloudinary = require('cloudinary').v2

const uploadProductImage = async (req, res) => {
  // check if file exists
  // check format
  // check size
  if (!req.files) {
    throw new CustomError.BadRequestError('No File Uploaded');
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload Image');
  }
  const maxSize = 1000;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please Upload Image Smaller Then 1kb'
    );
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

// si usas cloudinary usa este controller y no el anterior
// const uploadProductImage = async (req, res) => {
// console.log(req.files.image) //image object con tempFilePath que muestra el lugar donde está guardada la imagen (tu directorio debería aparecer una carpeta temp)
//en cloudinary: media file, add folder y ese nombre que le des sera el valor de folder:
// const result = await cloudinary.uploader.upload(
//   req.files.image.tempFilePath,
//   {
//     use_filename: true,
//     folder: 'file-upload',
//   }
// );
// si envias la req por postman verás que se sube la imagen a cloudinary, en la consola verás un objeto con toda la data que envía cloudinary, interesa ver secure_url donde la imagen está alojada en cloudinary
// console.log(result);
//   return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
// };

module.exports = { uploadProductImage };
