const { StatusCodes } = require('http-status-codes');
const path = require('path');

const uploadProductImage = async (req, res) => {
  // console.log(req); //necesitamos convertir la info de la imagen a un formato que se pueda leer, esto es con el paquete express-fileupload (en postman se usa form-data para asociar una imagen a la req)
  // console.log(req.files); //verás los datos de la imagen como objeto (no olvides permitirle a postman el acceso a la carpeta para subir la imagen en los settings)
  let productImage = req.files.image;
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
