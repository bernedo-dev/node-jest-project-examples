const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect(
            'mongodb+srv://rbernedo:rb123321@cluster0.ri29t.mongodb.net/tdd?retryWrites=true&w=majority',
            { useNewUrlParser:true }
        );
        console.log('mongodb connection ready!');
    } catch (error) {
        console.error("error connecting to mongodb");
        console.error(error);
    }
}

module.exports = { connect }


