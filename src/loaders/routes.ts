import { Application } from 'express';
import userRoutes from '@components/user';

const PREFIX = '/api';
const routes = [
  userRoutes,
];

const loadRoutes = (app: Application) => (
  routes.forEach(route => app.use(PREFIX, route))
);

export default loadRoutes;
