### Cloudinary.com

### Nube para almacenar imágenes con 25 gb gratis mensuales

1. Necesitas el cloud_name, cloud_api_key y cloud_api,key_secret, una vez creada la cuenta
2. existe un paquete npm cloudinary
3. primero debes agregar en app.js:

<!-- use v2 -->

const cloudinary = require('cloudinary').v2
cloudinary.config({
cloud_name: process.env.CLOUD_NAME,
api_key: process.env.CLOUD_API_KEY,
api_secret: process.env.CLOUD_API_SECRET,
})

4. Subir imágenes en cloudinary
