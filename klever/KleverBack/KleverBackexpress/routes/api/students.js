const router = require('express').Router();
const { request } = require('express');
const { getAll, create, deleteById, update } = require('../../models/students.model');


router.get('/', async (req, res) => {
    try {

        const limit = req.query.limit || 10;
        const page = req.query.page || 1;

        const rows = await getAll(parseInt(limit), parseInt(page));

        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'ERROR!!  ' });
    }

});


router.post('/add', [
], async (req, res) => {

    create(req.body)
        .then(result => res.json(result))
        .catch(error => console.log(error));
});


router.delete('/:studentId', async (req, res) => {
    const result = await deleteById(req.params.studentId);
    res.json(result);
});


router.put('/:studentId', async (req, res) => {
    const result = await update(req.params.studentId, req.body);
    res.json(result);
})




module.exports = router;