// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger/swagger.json');

// const app = express();
// app.use(express.json());

// const productsRouter = require('./routes/productsRoutes');
// const salesRouter = require('./routes/salesRoutes');
// const errorMiddleware = require('./middlewares/errorMiddleware');

// app.get('/', (_request, response) => {
//   response.send();
// });

// app.use('/products', productsRouter);
// app.use('/sales', salesRouter);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use(errorMiddleware);
// module.exports = app;
