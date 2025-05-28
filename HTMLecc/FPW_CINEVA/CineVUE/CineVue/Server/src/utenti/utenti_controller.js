const pool = require('../../db');
const queries = require('./utenti_queries');

const getUsersList = (req, res) => {
    pool.query(queries.getUsers, (error, results) => { 
        if (error) {
            console.error('Errore nella query getUsers:', error);
            return res.status(500).send('Errore interno durante la verifica degli utenti');
        };
        res.status(200).json(results.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if (error) {
            console.error('Errore nella query getUsersById:', error);
            return res.status(500).send('Errore interno durante la verifica dell\'utente');
        };;
        res.status(200).json(results.rows);
    });
};

const getUsersByUsernameEmail = (req, res) => {
    const { username, email } = req.params;

    if (!username || !email) {
        return res.status(400).json({ error: 'Username ed email sono obbligatori nella URL' });
    }
    pool.query(queries.getUsersByUsernameEmail, [username, email], (error, results) =>{
        if (error) {
            console.error('Errore nella query getUsersByUsernameEmail:', error);
            return res.status(500).send('Errore interno durante la verifica dell\'utente');
        };;
        res.status(200).json(results.rows);
    });
};

const addUsers = (req, res) => {
  const { username, pass, nome, cognome, email, foto } = req.body;

  pool.query(queries.getUsersByUsernameEmail, [username, email], (error, results) => {
    if (error) {
        console.error('Errore nella query getUsersByUsernameEmail:', error);
        return res.status(500).send('Errore interno durante la verifica del\'utente');
    };
    if (results.rows.length > 0) {
      res.status(400).send('L\'utente esiste già nel database');
    } else {
      pool.query(queries.addUsers, [ username, pass, nome, cognome, email, foto ], (error) => {
        if (error) {
            console.error('Errore nella query getUsersByUsernameEmail:', error);
            return res.status(500).send('Errore interno durante la verifica dell\'utente');
        };
        res.status(201).send('Utente aggiunto correttamente');
      });
    }
  });
};


const deleteUsers = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if (error) {
            console.error('Errore nella query getUsersById:', error);
            return res.status(500).send('Errore interno durante la verifica dell\'utente');
        };
        if (results.rowCount === 0) {
            res.status(404).send('Utente non trovato');
        } else {
            res.status(200).send('Utente eliminato correttamente');
        }
    });
};

const updateUsers = (req, res) => {
  const {id, email} = req.body;

  pool.query(queries.getUsersById, [id], (error, results) => {
    if (error) {
        console.error('Errore nella query getUsersById:', error);
        return res.status(500).send('Errore interno durante la verifica dell\'utente');
    };
    if (results.rows.length === 0) {
      res.status(400).send('L\'utente non esiste');
    } else {
      pool.query(queries.updateFilm, [email, id], (error) => {
        if (error) {
            console.error('Errore nella query getUsersById:', error);
            return res.status(500).send('Errore interno durante la verifica dell\'utente');
        };
        res.status(201).send('Utente aggiornato correttamente');
      });
    }
  });
};

module.exports = {
    getUsersList,
    getUsersById,
    getUsersByUsernameEmail,
    addUsers,
    deleteUsers,
    updateUsers
};