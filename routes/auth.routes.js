const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { login } = require('../controllers/auth.controller');


const routerAuth = Router();

routerAuth.post('/login',[
    check('email','The email is required').isEmail(),
    check('password','The password is required').not().isEmpty(),
    validateFields
],login);

module.exports = routerAuth;
