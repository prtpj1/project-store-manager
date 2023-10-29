const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Store Manager',
        description: 'CRUD API for products and sales of a store',
    },
    host: 'localhost:3000',
};

const outputFile = './swagger.json';
const routes = ['../routes/productsRoutes.js', '../routes/salesRoutes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);