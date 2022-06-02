import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

// middlewares
import handleError from './middlewares/handleError';

import '../../../shared/infra/typeorm';
import '../../../shared/container';

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}!`);
});
