// UTENTI
const getUsers = "SELECT * FROM utenti";

const getUsersById = "SELECT * FROM utenti WHERE id = $1";

const getUsersByUsernameEmail = "SELECT * FROM utenti WHERE username = $1 AND email = $2";

const addUsers = "INSERT INTO utenti (username, pass, nome, cognome, email, foto) VALUES ($1, $2, $3, $4, $5, $6)";

const deleteUsers = "DELETE FROM utenti WHERE id = $1";

const updateUsers = "UPDATE utenti SET email = $1 WHERE id = $2"

module.exports = {
    // UTENTI
    getUsers,
    getUsersById,
    getUsersByUsernameEmail,
    addUsers,
    deleteUsers,
    updateUsers,
};