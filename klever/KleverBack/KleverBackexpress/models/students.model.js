const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT * FROM school_system.students',
            (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
    });;
};


const create = ({ Full_name, course, email }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into students (Full_name, course, email) values (?, ?, ?)',
            [Full_name, course, email],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    });
}

const deleteById = (pEstudentId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from students where studentId = ?', [pEstudentId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}


const update = (studentId, { name, course }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update students set Full_name = ?, course = ? where studentId = ?',
            [name, course, studentId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    });
}





module.exports = {
    getAll, create, deleteById, update
};