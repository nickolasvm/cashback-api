import express, { Application, Request, Response } from 'express';
import connectDB from './database/connection';
import userRoute from './routes/userRoute';

const app: Application = express();

app.use(express.json());

connectDB();

app.use('/', userRoute);

app.get('/health', (_req: Request, res: Response) => res.status(200).send('Server on and healthy!'));

export default app;
