import express from 'express';
import 'reflect-metadata';
import 'module-alias/register';
import { loadMiddlewares, loadRoutes } from './loaders';

const app = express();
const PORT = process.env.PORT || 4000;

loadMiddlewares(app);
loadRoutes(app);

export { app, PORT };
