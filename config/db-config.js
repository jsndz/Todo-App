const mongoose = require('mongoose');

const connect = async()=>{
    await mongoose.connect("mongodb://localhost/TODO");
}

module.exports = connect;