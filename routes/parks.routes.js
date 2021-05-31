const { Router } = require('express');
const { check } = require('express-validator');
const { getAllParks, savePark, updatePark, deletePark } = require('../controllers/parks.controller');
const { validateFields } = require('../middlewares/validateFields');
const { existParkByName, existParkById } = require('../helpers/db-validators')
const { validateJWT } = require('../middlewares/validateJWT');
const { isAdminRole } = require('../middlewares/validateRole');


const routerParks = Router();

routerParks.get('/', getAllParks);

routerParks.post('/', [
    validateJWT,
    isAdminRole,
    check('name','The name of the exercise is not valid').isString(),
    check('name','The name is required').not().isEmpty(),
    check('city','The description of the exercise is not valid').isString(),
    check('city','The description is required').not().isEmpty(),
    check('region','The description of the exercise is not valid').isString(),
    check('region','The description is required').not().isEmpty(),
    check('urlDirection','The description of the exercise is not valid').isString(),
    check('urlDirection','The description is required').not().isEmpty(),
    check('urlImg','The img of the exercise is not valid').isString(),
    check('urlImg','The img is required').not().isEmpty(),
    check('name').custom(existParkByName),
    validateFields   
],savePark)

routerParks.put(`/:id`,[
    validateJWT,
    isAdminRole,
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existParkById),
    validateFields
],updatePark);


routerParks.delete(`/:id`,[
    validateJWT,
    isAdminRole,
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existParkById),
    validateFields
],deletePark
)


module.exports = routerParks;
