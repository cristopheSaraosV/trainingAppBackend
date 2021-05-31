const { Schema,model } = require('mongoose')

const ParksSchema = Schema({
    
    name:{
        type:String,
        required: [true, 'name is required'],
        unique: true
    },
    city:{
        type:String,
        required: [true, 'description is required']
    },
    region:{
        type:String,
        required: [true,'region is required']
    },
    urlDirection:{
        type:String,
        required: [true,'urlDirection is required']
    },
    urlImg:{
        type:String,
        required: [true,'urlImg is required']
    }
});

module.exports = model('Park',ParksSchema);


