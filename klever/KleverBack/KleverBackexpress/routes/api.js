const router = require('express').Router();


const apiStudentsRouter = require('./api/students');

router.use('/students', apiStudentsRouter);

module.exports = router;