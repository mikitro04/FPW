
const Pool = require('pg'). Pool; const pool = new Pool({ user: 'postgres',
    host: 'localhost',
    database: 'Cineva',
    password: 'CinevaUNICA',
    port: 5432,
});

module.exports = pool;