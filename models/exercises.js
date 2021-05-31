const { Schema,model } = require('mongoose')

const ExerciseSchema = Schema({
    
    name:{
        type:String,
        required: [true, 'name is required'],
        unique: true
    },
    description:{
        type:String,
        required: [true, 'description is required']
    },
    urlImg:{
        type:String,
        required: [true, 'The URL of the IMG is required']
    }

});

module.exports = model('Exercise',ExerciseSchema);


