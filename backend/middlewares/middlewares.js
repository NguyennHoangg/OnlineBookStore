const express = require('express');

const middleware = (app) => {
    app.use(express.urlencoded({extended: true}));
    //xu ly du lieu json
    app.use(express.json());
}

module.exports = middleware;