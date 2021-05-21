const { Router } = require('express');
const { check } = require('express-validator');
const parksControllers = require('../controllers/parks.controller');
const { validateFields } = require('../middlewares/validateFields');
const { existParkByName,existParkById } = require('../helpers/db-validators')


const routerParks = Router();

routerParks.get('/', parksControllers.getAllParks);

routerParks.post('/', [
    check('name','The name of the exercise is not valid').isString(),
    check('name','The name is required').not().isEmpty(),
    check('city','The description of the exercise is not valid').isString(),
    check('city','The description is required').not().isEmpty(),
    check('region','The description of the exercise is not valid').isString(),
    check('region','The description is required').not().isEmpty(),
    check('urlDirection','The description of the exercise is not valid').isString(),
    check('urlDirection','The description is required').not().isEmpty(),
    check('name').custom(existParkByName),
    validateFields   
],parksControllers.savePark)

routerParks.put(`/:id`,[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existParkById),
    validateFields
],parksControllers.updatePark);


routerParks.delete(`/:id`,[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existParkById),
    validateFields
],
parksControllers.deletePark
)


module.exports = routerParks;
