const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const {generarJWT} = require('../helpers/generateJWT');


const login = async (req = request, res = response) => {
	
    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        const validatePassword = bcryptjs.compareSync(password, user.password);

        if( !user.state || !validatePassword  ){
            return res.status(400).json({
                'msg' : 'User / password are not correct'
            })
        }
       
        const token = await generarJWT( user.id );

        res.json({
            user,
            token
        })

        
    } catch (error) {
        console.log('=========Error========');
        console.log(error.message);
        console.log('======================');
        return res.status(500).json({
            msg:'Something went wrong, contact the administrator'
        })    
    }


  
};



module.exports = {
	login
};
