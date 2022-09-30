////////////////////////////////////////////////////////////////////////////
// imports

const express = require('express');
const path = require('path');
////////////////////////////////////////////////////////////////////////////

const locationRouter = require('./routes/locationRoutes')
const personalTourRouter = require('./routes/personalTourRoutes')
const progressRoute = require('./routes/progressRoutes')
const userRouter = require("./routes/userRoutes");
////////////////////////////////////////////////////////////////////////////
// Config


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));
app.use(express.static(path.join(__dirname, '../frontend')));

///////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function (req, res) {
    res.render('home.ejs');
});

app.get('/help', function (req, res) {
    res.render('explain.ejs');
});

app.get('/progress', function (req, res) {
    res.render('progress.ejs');
});

///////////////////////////////////////////////////////////////////////////////////////////////
// routes
app.use('/users', userRouter);
app.use('/locations', locationRouter);
app.use('/personaltour', personalTourRouter);
app.use('/progress', progressRoute);
///////////////////////////////////////////////////////////////////////////////

module.exports = app;

//////////////////////////////////////////////////////////////////////////////
