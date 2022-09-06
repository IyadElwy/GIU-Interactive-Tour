//////////////////////////////////////////////////////////////////////////////
// imports

require('dotenv').config({path: './Config.env'});

const mongoose = require("mongoose");
const app = require("./app");

//////////////////////////////////////////////////////////////////////////////
// DB config

const uri = process.env.DATABASE_STRING;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//////////////////////////////////////////////////////////////////////////////
// server config

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//////////////////////////////////////////////////////////////////////////////
