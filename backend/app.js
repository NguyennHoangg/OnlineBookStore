const express = require('express');
const app = express();
const ViewEngine = require('./config/ViewEngine');
const middleware = require('./middlewares/middlewares');
const routes = require('./routes'); 

middleware(app);

ViewEngine(app);

routes(app); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
});