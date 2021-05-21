const { Router } = require('express');
const exerciseControllers = require('../controllers/exercises.controller');
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields');
const { existExerciseByName,existExerciseById } = require('../helpers/db-validators')
const routerExercises = Router();

routerExercises.get(`/`,exerciseControllers.getAllExercises);

routerExercises.post(`/`,[
    check('name','The name of the exercise is not valid').isString(),
    check('name','The name is required').not().isEmpty(),
    check('description','The description of the exercise is not valid').isString(),
    check('description','The description is required').not().isEmpty(),
    check('name').custom(existExerciseByName),
    validateFields
],exerciseControllers.saveExercise);

routerExercises.put(`/:id`,[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existExerciseById),
    validateFields
],exerciseControllers.updateExercise);

routerExercises.delete('/:id',[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existExerciseById),
    validateFields
],exerciseControllers.deleteExercise)


module.exports = routerExercises;
