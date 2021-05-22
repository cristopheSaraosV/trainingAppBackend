const Exercise = require('../models/exercises');
const Park = require('../models/parks');
const User = require('../models/User');
const Rol = require('../models/rols');

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

const existUserByEmail = async  (email = '') => {

    const exist = await User.findOne({email})
	if( exist ){
		throw new Error(`There is  user with that email ${email}`);		
	}
} 
const existUserById = async  (id = '') => {

    const exist = await User.findOne({_id:id})
	if( !exist ){
		throw new Error(`The user with ID ${id} does not exist`);		
	}
} 

const existRol = async  (rol = '') => {

    const exist = await Rol.findOne({rol})
	if( !exist ){
		throw new Error(`There is no role: ${rol} in the database`);		
	}
} 



module.exports = {
    existExerciseByName,
	existExerciseById,
	existParkByName,
	existParkById,
	existUserByEmail,
	existRol,
	existUserById
}