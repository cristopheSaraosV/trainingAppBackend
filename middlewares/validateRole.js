const { response, request } = require('express');

const isAdminRole = async ( req = request, res = response, next) => {
    
    if( !req.user ){
        return res.status(500).json({
            msg: 'You want to verify the role without validating the token first',
        });
    }

    const { rol, name } = req.user;
    
    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `The user ${name} has no permission to make this action, It is required to be an administrator`,
        });
    }

    next();
}

module.exports = {
    isAdminRole
}