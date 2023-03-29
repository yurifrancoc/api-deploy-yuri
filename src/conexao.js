// const { Pool } = require('pg');
// const knex = require('knex')

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'market_cubos',
//     password: 'postgres',
//     port: 5432
// });

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123456',
        database: 'market_cubos'
    }
});



// module.exports = {
//     knex
// }

// const query = (text, param) => {
//     return pool.query(text, param);
// }

module.exports = {
    knex
}