const { response, request } = require('express');

const Rol = require('../models/rols');


const getAllRol = async (req = request, res = response) => {

    const roleList =  await Rol.find();
	res.json(roleList);
};

module.exports = {
	getAllRol
};
