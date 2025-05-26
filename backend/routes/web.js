const express = require('express');
const routes = express.Router();
const {PostNewUser} = require('../controllers/UserController');

routes.get('/', (req, res) =>{
   res.render('home'); 
});

routes.post('/create-user', (req, res) => {
   console.log('POST /create-user được gọi'); // Debug
   PostNewUser(req, res);
});


module.exports = routes;