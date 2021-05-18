const Exercise = require('../models/exercises');
const Park = require('../models/parks');

const existExerciseByName = async  (name = '') => {

    const exist = await Exercise.findOne({name})
	if( exist ){
		throw new Error('The exercise is already registered');		
	}
} 

const existExerciseById = async  (id = '') => {

    const exist = await Exercise.findOne({_id:id})
	if( !exist ){
		throw new Error(`There is not exercise with that ID ${id}`);		
	}
} 

const existParkByName = async  (name = '') => {

    const exist = await Park.findOne({name:name})
	if( exist ){
		throw new Error(`There is park with that name ${name}`);		
	}
} 
const existParkById = async  (id = '') => {

    const exist = await Park.findOne({_id:id})
	if( !exist ){
		throw new Error(`There is not park with that id ${id}`);		
	}
} 



module.exports = {
    existExerciseByName,
	existExerciseById,
	existParkByName,
	existParkById	
}