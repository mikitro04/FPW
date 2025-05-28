// UTENTI
const getReview = "SELECT * FROM recensioni";
/*
const getReviewById = "SELECT * FROM utenti WHERE id = $1";

//const getUsersByUsernameEmail = "SELECT * FROM utenti WHERE username = $1 AND email = $2";

const addReview = "INSERT INTO utenti (voto, commento, data, num_like, mum_dislike, utente_id, film_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const deleteReview = "DELETE FROM utenti WHERE id = $1";

const updateReview = "UPDATE utenti SET email = $1 WHERE id = $2"
*/
module.exports = {
    // Recensioni
    getReview,
    /*getReviewById,
    addReview,
    deleteReview,
    updateReview*/
};