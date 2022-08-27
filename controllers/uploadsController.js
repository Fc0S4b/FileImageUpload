const { StatusCodes } = require('http-status-codes');

const uploadProductImage = async (req, res) => {
  // console.log(req); //necesitamos convertir la info de la imagen a un formato que se pueda leer, esto es con el paquete express-fileupload (en postman se usa form-data para asociar una imagen a la req)
  res.send('uploadProductImage');
};

module.exports = { uploadProductImage };
