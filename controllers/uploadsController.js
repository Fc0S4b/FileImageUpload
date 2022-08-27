const { StatusCodes } = require('http-status-codes');
const path = require('path');
const CustomError = require('../errors');

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

module.exports = { uploadProductImage };
