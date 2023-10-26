const express = require('express');

const app = express();

const connect = require('./config/db-config')

const PORT = 3000;

app.use('/',express.static(__dirname + "/public"));

app.listen(PORT,async()=>{
    console.log("HEllo SERVER has been Started");
    await connect();
    console.log("connected to DB");
});