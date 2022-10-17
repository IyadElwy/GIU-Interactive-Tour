//////////////////////////////////////////////////////////////////////////////
// imports

require('dotenv').config({path: './Config.env'});

const mongoose = require("mongoose");
const app = require("./app");

//////////////////////////////////////////////////////////////////////////////
// DB config

const uri = 'mongodb+srv://admin:E4ySvPgXFkW9pSP1@giutourcluster.balezcz.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//////////////////////////////////////////////////////////////////////////////
// server config

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//////////////////////////////////////////////////////////////////////////////
