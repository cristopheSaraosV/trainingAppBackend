const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
    name: {
        type: String,
        required: [true,'The name is required']
    },
    email: {
        type: String,
        required: [true,'The email is required']
    },
    password: {
        type: String,
        required: [true,'The password is required']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum:[ 'ADMIN_ROLE', 'USER_ROLE' ]
    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})

UsersSchema.methods.toJSON = function(){
    const { __version, password, ...user } = this.toObject();
    return user
}

module.exports = model('User',UsersSchema)