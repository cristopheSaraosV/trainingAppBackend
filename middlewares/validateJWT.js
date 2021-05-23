const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const User = require('../models/user');

const validateJWT = async (req = request, res = response, next) => {
	const token = req.header('x-token');

	if (!token) {
		return res.status(401).json({
			msg: 'Access Token is required',
		});
	}

	try {

		const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
		const user = await User.findById(uid);

        if( !user ){
            res.status(401).json({
                msg: 'Token not valid, User does not exist in DB',
            });
        }


		if (!user.state) {
			res.status(401).json({
				msg: 'Token not valid, user is eliminated',
			});
		}

		req.user = user;
		next();
	} catch (error) {
		console.log(error.message);
		res.status(401).json({
			msg: 'Token not valid',
		});
	}
};

module.exports = {
	validateJWT,
};
