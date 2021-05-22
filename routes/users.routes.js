const { Router } = require('express');
const usersControllers = require('../controllers/users.controller');
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields');
const { existUserByEmail, existRol,existUserById } = require('../helpers/db-validators')

const routerUsers = Router();

routerUsers.get('/',usersControllers.getAllUser);

routerUsers.post('/',[
    check('email','The mail is not valid').isEmail(),
    check('password','The password must have more than 6 letters').isLength({ min:6 }),
    check('name','The name is required').not().isEmpty(),
    check('rol').custom(existRol),
    check('email').custom(existUserByEmail),
    validateFields    
],usersControllers.saveUser);


routerUsers.put('/:id',[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existUserById),
    check('rol').custom(existRol),
    validateFields
],usersControllers.updateUser)


routerUsers.delete('/:id',[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existUserById),   
    validateFields
],usersControllers.deleteUser)


module.exports = routerUsers;
