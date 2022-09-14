const express = require('express');
const { addPT, deletePT } = require('../controllers/personalTour')

const router = express.Router();

router
    .post('/add/',addPT)
    .delete('/delete',deletePT)



module.exports = router;    