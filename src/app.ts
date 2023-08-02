import express, { Application } from 'express';
import errorHandler from './middlewares/errorHandler';
import routes from './routes';

const app: Application = express();

app.use(express.json());

app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/sale', routes.sale);

app.use(errorHandler);

export default app;
