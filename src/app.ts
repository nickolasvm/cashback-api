import express, { Application } from 'express';
import { connectDB } from './database/connection';
import errorHandler from './middlewares/errorHandler';
import authorization from './middlewares/authorization';
import routes from './routes';

const app: Application = express();

connectDB();

app.use(express.json());

app.use('/user', routes.user);
app.use('/login', routes.login);

app.use(authorization);
app.use('/sale', routes.sale);

app.use(errorHandler);

export default app;
