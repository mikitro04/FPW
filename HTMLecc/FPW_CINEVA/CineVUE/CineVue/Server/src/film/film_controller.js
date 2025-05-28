const pool = require('../../db');
const queries = require('./film_queries');

const getFilmList = (req, res) => {
    pool.query(queries.getFilms, (error, results) => { 
        if (error) {
            console.error('Errore nella query getFilmByTitoloRegista:', error);
            return res.status(500).send('Errore interno durante la verifica del film');
        };
        res.status(200).json(results.rows);
    });
};

const getFilmById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getFilmById, [id], (error, results) => {
        if (error) {
            console.error('Errore nella query getFilmByid:', error);
            return res.status(500).send('Errore interno durante la verifica del film');
        };;
        res.status(200).json(results.rows);
    });
};

const getFilmByTitoloRegista = (req, res) => {
    const { titolo, regista } = req.params;

    if (!titolo || !regista) {
        return res.status(400).json({ error: 'Titolo e regista sono obbligatori nella URL' });
    }
    pool.query(queries.getFilmByTitoloRegista, [titolo, regista], (error, results) =>{
        if (error) {
            console.error('Errore nella query getFilmByTitoloRegista:', error);
            return res.status(500).send('Errore interno durante la verifica del film');
        };;
        res.status(200).json(results.rows);
    });
};

const addFilm = (req, res) => {
  const { titolo, regista, genere, descrizione, foto_locandina } = req.body;

  pool.query(queries.getFilmByTitoloRegista, [titolo, regista], (error, results) => {
    if (error) {
        console.error('Errore nella query getFilmByTitoloRegista:', error);
        return res.status(500).send('Errore interno durante la verifica del film');
    };
    if (results.rows.length > 0) {
      res.status(400).send('Il film esiste già nel database');
    } else {
      pool.query(queries.addFilm, [ titolo, regista, genere, descrizione, foto_locandina ], (error) => {
        if (error) {
            console.error('Errore nella query getFilmByTitoloRegista:', error);
            return res.status(500).send('Errore interno durante la verifica del film');
        };
        res.status(201).send('Film aggiunto correttamente');
      });
    }
  });
};


const deleteFilm = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteFilm, [id], (error, results) => {
        if (error) {
            console.error('Errore nella query getFilmById:', error);
            return res.status(500).send('Errore interno durante la verifica del film');
        };
        if (results.rowCount === 0) {
            res.status(404).send('Film non trovato');
        } else {
            res.status(200).send('Film eliminato correttamente');
        }
    });
};

const updateFilm = (req, res) => {
  const {titolo, regista, genere, descrizione, foto_locandina, id} = req.body;

  pool.query(queries.getFilmById, [id], (error, results) => {
    if (error) {
        console.error('Errore nella query getFilmById:', error);
        return res.status(500).send('Errore interno durante la verifica del film');
    };
    if (results.rows.length === 0) {
      res.status(400).send('Il film non esiste');
    } else {
      pool.query(queries.updateFilm, [titolo, regista, genere, descrizione, foto_locandina, id], (error) => {
        if (error) {
            console.error('Errore nella query getFilmByTitoloRegista:', error);
            return res.status(500).send('Errore interno durante la verifica del film');
        };
        res.status(201).send('Film aggiornato correttamente');
      });
    }
  });
};




module.exports = {
    getFilmList,
    getFilmById,
    getFilmByTitoloRegista,
    addFilm,
    deleteFilm,
    updateFilm,
};