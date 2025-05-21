const express = require('express');
const filmRoutes = require('./src/film/film_routes');
const app = express();
const port = 3000;

app.use('/film', filmRoutes);
app.listen(port, () => console.log(`app listening on port ${port}!`));


app.get('/', (req, res) => { 
    res.send('Hello World!');
});