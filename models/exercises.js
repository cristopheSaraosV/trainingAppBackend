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
    }

});

module.exports = model('Exercise',ExerciseSchema);


