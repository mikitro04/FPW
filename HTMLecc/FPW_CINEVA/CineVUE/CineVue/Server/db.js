
const Pool = require('pg'). Pool; const pool = new Pool({ user: 'postgres',
    host: 'localhost',
    database: 'cineva',
    password: 'CinevaUNICA',
    port: 5432,
});

module.exports = pool;