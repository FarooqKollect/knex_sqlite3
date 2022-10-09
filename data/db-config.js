const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
    find, 
    findById,
    insert,
    update,
    remove,
};

//function to perform CRUD
function find() {
    return db('users')
};

function findById(id) {
    return db('users').where({ id: Number(id) })
};
