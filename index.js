// const app = require('./app');
require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const salesServices = require('./services/salesServices');

const app = express();
app.use(express.json());

const productsRouter = require('./routes/productsRoutes');
const salesRouter = require('./routes/salesRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.get('/sales2', async (req, res) => {
  try {
    const data = await salesServices.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.log('🚀 ~ getAll Sales error', error);
  }
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

module.exports = app;