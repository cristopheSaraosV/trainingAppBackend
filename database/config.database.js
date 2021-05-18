const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try {
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        });

        console.log('Data base connected');

    } catch (error) {
        console.log(error.message);
        throw new Error('Error starting in the Data Base')    
    }
};

module.exports = {
    dbConnection
}
