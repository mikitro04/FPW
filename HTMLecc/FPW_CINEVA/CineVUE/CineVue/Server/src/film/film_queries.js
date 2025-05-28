// FILM
const getFilms = "SELECT * FROM film";

const getFilmById = "SELECT * FROM film WHERE id = $1";

const getFilmByTitoloRegista = "SELECT * FROM film WHERE titolo = $1 AND regista = $2";

const addFilm = "INSERT INTO film (titolo, regista, genere, descrizione, foto_locandina) VALUES ($1, $2, $3, $4, $5)";

const deleteFilm = "DELETE FROM film WHERE id = $1";

const updateFilm = "UPDATE film SET titolo = $1, regista = $2, genere = $3, descrizione = $4, foto_locandina = $5 WHERE id = $6"

module.exports = {
    // FILM
    getFilms,
    getFilmById,
    getFilmByTitoloRegista,
    addFilm,
    deleteFilm,
    updateFilm,
};
