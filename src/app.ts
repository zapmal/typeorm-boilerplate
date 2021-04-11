import express from 'express';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import 'module-alias/register';

import userRoutes from '@components/user';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(userRoutes);

const main = async () => {
  await createConnection();

  app.listen(PORT, () => console.log('Up and running'));
};

main().catch((error) => console.error(error));
