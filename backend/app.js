////////////////////////////////////////////////////////////////////////////
// imports

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

////////////////////////////////////////////////////////////////////////////
// Routers

const locationRouter = require('./routes/locationRoutes')
const personalTourRouter = require('./routes/personalTourRoutes')
const progressRoute = require('./routes/progressRoutes')
const userRouter = require("./routes/userRoutes");

////////////////////////////////////////////////////////////////////////////
// Config

const app = express();
app.use(express.json());
app.use(bodyParser.json({type: 'application/*+json'}))
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));
app.use(express.static(path.join(__dirname, '../frontend')));

///////////////////////////////////////////////////////////////////////////////////////////////
// Frontend Routes

app.get('/', function (req, res) {
    res.render('home.ejs');
});

app.post('/explain', async function (req, res) {
    const email = req.body.Email;
    const locations = ['Computer Science', 'Business', 'Engineering', 'Pharmaceutical', 'Architecture',
        'GDSC Logo', 'GIU Logo']

    const progressBody = locations.map((x) => ({location: x, seen: false}));


    try {
        const user = await axios.post(req.protocol + '://' + req.get('host') + '/users', {
            email: email,
            Locations: progressBody
        })


        res.render('explain.ejs', {
            id: user.data.data._id
        });


    } catch (e) {

        const user = await axios.get(req.protocol + '://' + req.get('host') + '/users/' + email)


        res.render('explain.ejs', {
            id: user.data.data.data._id
        });
    }

});

app.get('/progress', async function (req, res) {

    const userid = req.originalUrl.toString().split('=')[1]

    const user = await axios.get(req.protocol + '://' + req.get('host') + '/users/byid/' + userid)


    res.render('progress.ejs', {
        locations: user.data.data.data.Locations
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////
// routes
app.use('/users', userRouter);
app.use('/locations', locationRouter);
app.use('/personaltour', personalTourRouter);
app.use('/progressapi', progressRoute);
///////////////////////////////////////////////////////////////////////////////

module.exports = app;

//////////////////////////////////////////////////////////////////////////////
