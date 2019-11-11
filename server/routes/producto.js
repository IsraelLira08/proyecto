const express = require('express');
const _ = require('underscore');
const Producto = require('../models/producto');
const app = express();

app.post('/producto', (req, res) => {
    let body = req.body;

    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precioUni,
        categoria: body.categoria,
        usuario: body.usuario
    });
    producto.save((err, proDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            proDB
        });
    });
});

app.put('/producto/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'precioUni', 'categoria', 'disponible', 'usuario']);

    Producto.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, proDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };
        return res.status(200).json({
            ok: true,
            proDB
        });
    });
});
module.exports = app;