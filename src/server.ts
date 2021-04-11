import { createConnection } from 'typeorm';
import { app, PORT } from './app';

const main = async () => {
  await createConnection();

  app.listen(PORT, () => console.log(`Up and running on http://localhost:${PORT}`));
};

main().catch((error) => console.error(error));
