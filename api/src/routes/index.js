const { Router } = require('express');
// Importar todos los routers;


const loginRouter = require('./User.js')


const router = Router();

router.use('/user', loginRouter);


module.exports = router;
