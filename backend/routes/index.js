const siteRoutes = require('./web');

const routes = (app) => {
    app.use('/', siteRoutes);
};

module.exports = routes;