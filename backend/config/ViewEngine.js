const path = require('path');
const express = require('express');
const { create } = require('express-handlebars');
const morgan = require('morgan');

const ViewEngine = (app) =>{
    const handlebars = create({
       layoutsDir: path.join(__dirname, '..', 'views', 'layouts'), // Thư mục chứa layout
        defaultLayout: 'main', // Layout mặc định
        extname: '.handlebars', // Phần mở rộng file
    });

    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '..', 'views')); // Thư mục chứa các view
    app.use(morgan('combined'));

    

}

module.exports = ViewEngine;