const jwt = require('jsonwebtoken')

const generarJWT = async (uid = '') =>{
    
    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn:'365d'
        },( err, token ) => {

            if( err ){
                console.log(err);
                reject('The token could not be generated');
            }else{
                resolve(token);
            }

        })
    })
}


module.exports = {
    generarJWT
}