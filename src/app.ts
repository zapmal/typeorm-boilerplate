import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import userRoutes from './components/user';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(userRoutes);

const main = async () => {
  await createConnection();

  app.listen(PORT, () => console.log('Up and running'));
};

main().catch((error) => console.error(error));
