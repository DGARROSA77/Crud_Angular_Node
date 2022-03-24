const router = require('express').Router();
const { getAll, create, deleteById, update } = require('../models/students.model');

//GET http://localhost:3000/students
router.get('/', async (req, res) => {

    // recuperar todos los estudiantes
    const estudiantes = await getAll();

    res.render('students/list', {
        estudentArray: students,

    });
});


// GET http://localhost:3000/students/delete
router.get('/delete/:studentId', async (req, res) => {
    const result = await deleteById(req.params.studentId);
    res.redirect('/home');
})


// POST http://localhost:3000/students/update
router.put('/update/:studentId', async (req, res) => {
    const result = await update(req.params.studentId, req.body);

    res.redirect('/students/' + req.params.studentId);
})



module.exports = router;