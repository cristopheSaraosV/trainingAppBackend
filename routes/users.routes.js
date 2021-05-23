const { Router } = require('express');
const { getAllUser, saveUser, updateUser, deleteUser } = require('../controllers/users.controller');
const { check } = require('express-validator')
const { existUserByEmail, existRol, existUserById } = require('../helpers/db-validators');
const { validateFields, validateJWT, isAdminRole } =require('../middlewares')
const routerUsers = Router();

routerUsers.get('/',getAllUser);

routerUsers.post('/',[
    validateJWT,
    isAdminRole,
    check('email','The mail is not valid').isEmail(),
    check('password','The password must have more than 6 letters').isLength({ min:6 }),
    check('name','The name is required').not().isEmpty(),
    check('rol').custom(existRol),
    check('email').custom(existUserByEmail),
    validateFields    
],saveUser);


routerUsers.put('/:id',[
    validateJWT,
    isAdminRole,
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existUserById),
    check('rol').custom(existRol),
    validateFields
],updateUser)


routerUsers.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existUserById),   
    validateFields
],deleteUser)


module.exports = routerUsers;
