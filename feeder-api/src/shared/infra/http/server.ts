import 'reflect-metadata';

import * as dotenv from 'dotenv';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

// middlewares
import handleError from './middlewares/handleError';

import '@shared/infra/typeorm';
import '@shared/container';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
