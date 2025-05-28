const pool = require('../../db');
const queries = require('./recensioni_queries');

const getReviewList = (req, res) => {
    pool.query(queries.getReview, (error, results) => { 
        if (error) {
            console.error('Errore nella query getReview:', error);
            return res.status(500).send('Errore interno durante la verifica delle recensioni');
        };
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getReviewList,
};