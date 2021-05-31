const { Router } = require('express');
const { getAllExercises, saveExercise, updateExercise, deleteExercise } = require('../controllers/exercises.controller');
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields');
const { existExerciseByName, existExerciseById } = require('../helpers/db-validators')
const routerExercises = Router();
const { validateJWT } = require('../middlewares/validateJWT');
const { isAdminRole } = require('../middlewares/validateRole');

routerExercises.get(`/`,getAllExercises);

routerExercises.post(`/`,[
    validateJWT,
    isAdminRole,
    check('name','The name of the exercise is not valid').isString(),
    check('name','The name is required').not().isEmpty(),
    check('description','The description of the exercise is not valid').isString(),
    check('description','The description is required').not().isEmpty(),
    check('urlImg','The urlImg of the exercise is not valid').isString(),
    check('urlImg','The urlImg is required').not().isEmpty(),
    check('name').custom(existExerciseByName),
    validateFields
],saveExercise);

routerExercises.put(`/:id`,[
    validateJWT,
    isAdminRole,
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existExerciseById),
    validateFields
],updateExercise);

routerExercises.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existExerciseById),
    validateFields
],deleteExercise)


module.exports = routerExercises;
