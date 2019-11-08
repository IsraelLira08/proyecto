require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/producto'));


mongoose.connect('mongodb://localhost:27017/cafeteria', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});