import express, { Application } from 'express';

const loadMiddlewares = (app: Application) => {
  app.use(express.json());
};

export default loadMiddlewares;
