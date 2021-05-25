const { Router } = require('express');
const { getAllRol } = require('../controllers/rols.controller')
const routerRols = Router();


routerRols.get('/',getAllRol);


module.exports = routerRols;
